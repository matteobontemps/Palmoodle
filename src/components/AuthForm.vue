<script setup></script>

<template>
  <form class="container">
    <div class="col-6 col-lg-4 mb-3">
      <label for="mail" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="mail"
        aria-describedby="emailHelp"
        required
      />
      <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="col-6 col-lg-4 mb-3">
      <label for="mdp" class="form-label">Password</label>
      <input type="password" class="form-control" id="mdp" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
