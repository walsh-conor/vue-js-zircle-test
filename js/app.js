const one = {
  template: `
  <z-panel view="one" color="light-blue">
    <h1>CKE Training Portal</h1>
      <z-scale
      slot="circles"
      color="orange"
      :angle="-45"
      size="small"
      gotoview="two" style="color: white;">
      <i class="fa fa-arrow-right"></i>
      </z-scale>
  </z-panel>`
}
const two = {
  template: `
  <z-panel view="two" color="orange">
    <p>
        <b>Section 1</b><br> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.
    </p>
      <z-scale
      slot="circles"
      color="purple"
      :angle="-45"
      size="small"
      gotoview="three" style="color: white;">
       <i class="fa fa-arrow-right"></i>
      </z-scale>
  </z-panel>`
}
const three = {
  template: `
  <z-panel view="three" color="purple">
    <p>
        <b>Section 2</b><br> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.
    </p>
      <z-scale
      slot="circles"
      color="green"
      :angle="-45"
      size="small"
      gotoview="four" style="color: white;">
       <i class="fa fa-arrow-right"></i>
      </z-scale>
  </z-panel>`
}
const four = {
  template: `
  <z-panel view="four" color="green">
    <p>
        <b>Section 3</b><br> Sed ut unde omnis iste natus sit voluptatem.
    </p>
      <z-scale
      slot="circles"
      color="red"
      :angle="45"
      size="small" style="color: white;">
      CW
      </z-scale>
  </z-panel>`
}

new Vue({
  el: '#app',
  components: {
    one,
    two,
    three,
    four
  },
  beforeMount () {
    this.$zircleStore.setView('one')
  }
})
