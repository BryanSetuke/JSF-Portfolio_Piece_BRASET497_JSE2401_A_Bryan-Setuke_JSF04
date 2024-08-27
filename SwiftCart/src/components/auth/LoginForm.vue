<template>
    <div
        class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2
                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                >
                    Sign in to your account
                </h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="login">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm">
                    <div>
                        <label for="username" class="sr-only">Username</label>
                        <input
                            v-model="username"
                            id="username"
                            name="username"
                            type="text"
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                        />
                    </div>
                    <div class="relative">
                        <label for="password" class="sr-only">Password</label>
                        <input
                            v-model="password"
                            :type="passwordVisible ? 'text' : 'password'"
                            id="password"
                            name="password"
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            @click="togglePasswordVisibility"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            <i
                                :class="
                                    passwordVisible
                                        ? 'fas fa-eye-slash'
                                        : 'fas fa-eye'
                                "
                                class="h-5 w-5 text-gray-400"
                            ></i>
                        </button>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        :disabled="loading"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span
                            class="absolute left-0 inset-y-0 flex items-center pl-3"
                        >
                            <i
                                class="fas fa-lock h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                            ></i>
                        </span>
                        {{ loading ? "Signing in..." : "Sign in" }}
                    </button>
                </div>
            </form>
            <p v-if="error" class="mt-2 text-center text-sm text-red-600">
                {{ error }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../store/modules/auth";

const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const passwordVisible = ref(false);
const loading = ref(false);
const error = ref("");

const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};

const login = async () => {
    loading.value = true;
    error.value = "";
    try {
        await authStore.login({
            username: username.value,
            password: password.value,
        });
        // Login successful, user will be redirected automatically
    } catch (err) {
        error.value =
            "Login failed. Please check your credentials and try again.";
    } finally {
        loading.value = false;
    }
};
</script>
