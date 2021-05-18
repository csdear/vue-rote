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
    <sub>validations, localStorage</sub>
    <!-- devo input field to list only.
    <!-- <div class="input-form">
        <form @submit="submitFormFSVUE" class="ui form">
            <div class="field"> -->
                <!-- 1. only to demonstrate a ref bound to an input element -->
                <!-- <input ref="newItem" type="text" placeholder="Add an Item"> -->
                <!-- <input v-model="newItem" type="text" placeholder="Add an Item">
            </div>
            <button class="ui button">Submit</button>
        </form>
        <div class="container bg-dark text-white p-3 m-3">
            <h4>Items</h4>
                <ul> -->
                    <!--bullshit error : "Elements in iteration expect to have 'v-bind:key' directive" -->
                    <!--<li v-for="item in items" class="item">{{ item }}</li> -->
                    <!-- <li v-for="(item, index) in items" :key="index" class="item">{{ item }}</li>
                </ul>
        </div>
    </div> -->
    <div class="input-form">
      <form @submit="submitFormFSVUE" class="ui form">
        <div class="field">
          <label>New Item</label>
          <input v-model="fields.newItem" type="text"
            placeholder="Add an item!" />
            <!--2.1[fsvue] realtime/inline validation. computed, conditionnal-display error messages -->
            <span style="float: right">{{ fields.newItem.length }}/20</span>
            <span style="color: red">{{ fieldErrors.newItem }}</span>
                <span style="color: red">{{ fieldErrors.newItem }}</span>
                <!-- if true, display -->
                <span v-if="isNewItemInputLimitExceeded"
                style="color: red; display: block">
                Must be under twenty characters
            </span>
        </div>
        <div class="field">
          <label>Email</label>
          <input v-model="fields.email" type="text"
            placeholder="What's your email?" />
             <span style="color: red">{{ fieldErrors.email }}</span>
        </div>
        <div class="field">
          <label>Urgency</label>
          <select v-model="fields.urgency" class="ui fluid search dropdown">
            <option disabled value="">Please select one</option>
            <option>Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
          <span style="color: red">{{ fieldErrors.urgency }}</span>
          <!--[fsvue}2.2 realtime/inline validation on drop-down select -->
          <span v-if="isNotUrgent"
            style="color: red; display: block">
            Must be moderate to urgent
          </span>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input v-model="fields.termsAndConditions" type="checkbox" />
            <label>I accept the terms and conditions</label>
            <span style="color: red">{{ fieldErrors.termsAndConditions }}</span>
          </div>
        </div>
        <!--[fsvue]2.3 prevent submit on error, set button disabled prop tor return
        value of our computed values -->
        <!--Comment out for [async-persistence] demo. -->
        <!-- <button :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Submit
        </button> -->

        <!--5. [async-persistence] p246. Update the button UI to reflect saving and loading status -->
        <button v-if="saveStatus === 'SAVING'"
          disabled class="ui button">
          Saving...
        </button>
        <button v-if="saveStatus === 'SUCCESS'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Saved! Submit another
        </button>
        <button v-if="saveStatus === 'ERROR'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Save Failed - Retry?
        </button>
        <button v-if="saveStatus === 'READY'"
          :disabled="isNewItemInputLimitExceeded || isNotUrgent"
          class="ui button">
          Submit
        </button>
      </form>
      <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
          <div v-if="loading" class="ui active inline loader"></div>
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
              fields: {
                newItem: '',
                email: '',
                urgency: '',
                termsAndConditions: false
            },
            fieldErrors: {
                newItem: undefined,
                email: undefined,
                urgency: undefined,
                termsAndConditions: undefined
            },
            items: [],
            //1. [async-persistence]
            loading: false,
            saveStatus: 'READY'
            }
        },
        computed: {
           //[fsvue]2.4 computed properties for eval input length and ddbox selection.
           isNewItemInputLimitExceeded() {
                return this.fields.newItem.length >= 20;
                },
                isNotUrgent() {
                return this.fields.urgency === 'Nonessential';
                }
        },
        created() {
            //2. [async-persistence]
            this.loading = true,
            apiClient.loadItems().then((items) => {
            this.items = items;
            this.loading = false;
            });
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

                // if fieldErrors has length, errors. return, kick out
                this.fieldErrors = this.validateForm(this.fields);
                if (Object.keys(this.fieldErrors).length) return;

                // ...else keep going and push
                // commented out for the async-persistence FSVUE demo.
                // console.log(this.fields.newItem);
                // this.items.push(this.fields.newItem);
                // this.newItem =  '';this.items.push(this.fields.newItem);
                // this.fields.newItem = '';
                // this.fields.email = '';
                // this.fields.urgency = '';
                // this.fields.termsAndConditions = false;

                //4. [async-persistence]
                const items = [...this.items, this.fields.newItem];

                this.saveStatus = 'SAVING';
                apiClient.saveItems(items)
                    .then(() => {
                        this.items = items;
                        this.fields.newItem = '';
                        this.fields.email = '';
                        this.fields.urgency = '';
                        this.fields.termsAndConditions = false;
                        this.saveStatus = 'SUCCESS';
                    })
                    .catch((err) => {
                        console.log(err);
                        this.saveStatus = 'ERROR';
                    });

            },
            validateForm(fields) {
                const errors = {};
                if (!fields.newItem) errors.newItem = "New Item Required";
                if (!fields.email) errors.email = "Email Required";
                if (!fields.urgency) errors.urgency = "Urgency Required";
                if (!fields.termsAndConditions) {
                    errors.termsAndConditions = "Terms and conditions have to be approved";
                }

                if (fields.email && !this.isEmail(fields.email)) {
                    errors.email = "Invalid Email";
                }

                return errors;
            },
            isEmail(email) {
                const re = /\S+@\S+\.\S+/;
                return re.test(email);
            }
        },
    }
    //3. [async-persistence]
    let apiClient = {
        loadItems: function () {
            return {
            then: function (cb) {
                setTimeout(() => {
                cb(JSON.parse(localStorage.items || '[]'));
                }, 1000);
            },
            };
        },

        saveItems: function (items) {
            const success = !!(this.count++ % 2);

            return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) return reject({ success });

                localStorage.items = JSON.stringify(items);
                return resolve({ success });
            }, 1000);
            });
        },

        count: 1,
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