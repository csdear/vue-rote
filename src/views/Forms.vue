<template>
    <div>
        <!-- Binding Text -->
        <h1>{{ title }}</h1>
        <p>REF: https://github.com/gopinav/Vue-3-Tutorials/blob/33090e007fb30e940486c130c85052fadb8c17d5/vue-fundamentals/src/App.vue</p>
        <pre>
        {{ JSON.stringify(formValues, null, 2) }}
        </pre>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model.trim="formValues.name" />
            </div>
            <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job location</label>
      <select id="job-location" v-model="formValues.jobLocation" multiple>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input
        id="remoteWork"
        type="checkbox"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">5-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="formValues.age" />
    </div>
    <div>
      <button>Submit</button>
    </div>
         </form>
    <hr>
    <div>
        <h2>Btns, one handler, evt.target</h2>
                <button @click="onButtonClick"
                    name="button-hoodie"
                    value="fullstack-hoodie"
                    class="ui button">Hoodie</button>
                <button @click="onButtonClick"
                    name="button-tee"
                    value="fullstack-tee"
                    class="ui button">Tee</button>
                <button @click="onButtonClick"
                    name="button-fitted-cap"
                    value="fullstack-fitted-cap"
                    class="ui button">Fitted Cap</button>
                <button @click="onButtonClick"
                    name="button-jacket"
                    value="fullstack-jacket"
                    class="ui button">Jacket</button>
        </div>
    <hr>
    <h2 class="ui header">Fullstack CLothing inquery sheet</h2>
    <div class="input-form">
        <form @submit="submitFormFSVUE" class="ui form">
            <div class="field">
                <!-- 1. only to demonstrate a ref bound to an input element -->
                <!-- <input ref="newItem" type="text" placeholder="Add an Item"> -->
                <input v-model="newItem" type="text" placeholder="Add an Item">
            </div>
            <button class="ui button">Submit</button>
        </form>
        <div class="container bg-dark text-white p-3 m-3">
            <h4>Items</h4>
                <ul>
                    <!--bullshit error -->
                    <!--<li v-for="item in items" class="item">{{ item }}</li> -->
                    <li v-for="(item, index) in items" :key="index" class="item">{{ item }}</li>
                </ul>
        </div>
    </div>

    </div>




</template>

<script>
    export default {
        name : 'Forms',
        data() {
            return {
                //REF : gopinav : https://github.com/gopinav/Vue-3-Tutorials/blob/33090e007fb30e940486c130c85052fadb8c17d5/vue-fundamentals/src/App.vue
                title: 'Forms',
                formValues: {
                name: '',
                profileSummary: '',
                country: '',
                jobLocation: [],
                remoteWork: 'no',
                skillSet: [],
                yearsOfExperience: '',
                age: null,
                },
              newItem: '',
              items: []
            }
        },
        methods: {
            submitForm() {
            console.log('form values', this.formValues)
            },
            handleClick: function(value) {
            alert(value)
            },
            handleClickEvent: function(event) {
            console.log(event)
            },
            onButtonClick(evt) {
            const button = evt.target;  // <-- EVT TARGET.
            console.log(`The user clicked ${button.name}: ${button.value}`);
            },
            submitFormFSVUE(evt) {
                evt.preventDefault();
                //1. demo refs
                // console.log(this.$refs.newItem.value);
                console.log(this.newItem);
                this.items.push(this.newItem);
                this.newItem =  '';
            }

        },
    }
</script>

<style scoped>
#forms {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>