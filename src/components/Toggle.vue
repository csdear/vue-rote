
<!-- Not template, this doesnt need to render anything, RENDERLESS --> 
const toggle = {
  props: {
    on: { type: Boolean, default: false }
  },
  render() {
    return []
  },
  data() {
    return { currentState: this.on }
  },
  methods: {
    setOn() {
      this.currentState = true
    },
    setOff() {
      this.currentState = false
    },
    toggle() {
      this.currentState = !this.currentState
    }
  }
}