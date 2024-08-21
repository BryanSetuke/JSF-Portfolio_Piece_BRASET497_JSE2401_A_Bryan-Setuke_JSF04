<template>
  <div class="profile-container">
    <h1>User Profile</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name.firstname }} {{ user.name.lastname }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      </div>
      <div v-else>
        <p>No user found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: null,
      loading: true,
    };
  },
  methods: {
    fetchUser() {
      fetch('https://fakestoreapi.com/users/1') // Replace with the desired user ID
        .then((res) => res.json())
        .then((json) => {
          this.user = json;
          this.loading = false;
        })
        .catch((err) => {
          console.error('Error fetching user:', err);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
}
</style>
