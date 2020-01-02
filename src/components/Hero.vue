<template>
  <section class="hero is-dark">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="@/assets/logo.svg" alt="Logo">
            </a>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="field is-grouped">
          <div class="control is-expanded">
            <input class="input is-rounded" type="text" placeholder="Rounded input" />
          </div>
          <div class="control">
            <button class="button is-rounded">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
