<template>
  <div>
    <b-container class="contact-form">
      <ValidationObserver v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <b-row>
            <h2 class="text-center mt-3 mb-4">Get in Touch</h2>
          </b-row>
          <b-card class="border border-info">
            <b-row>
              <b-col>
                <ValidationProvider name="name" rules="required">
                  <div slot-scope="{ errors }">
                    <b-form-group label="Your Name:" class="mt-3">
                      <b-form-input
                        v-model="name"
                        placeholder="Enter name"
                      ></b-form-input>
                      <div class="error">
                        {{ errors[0] }}
                      </div>
                    </b-form-group>
                  </div>
                </ValidationProvider>

                <ValidationProvider name="email" rules="required|email">
                  <div slot-scope="{ errors }">
                    <b-form-group
                      label="Email address:"
                      description="We'll never share your email with anyone else."
                      class="mt-3"
                    >
                      <b-form-input
                        v-model="email"
                        placeholder="Enter email"
                      ></b-form-input>
                      <div class="error">
                        {{ errors[0] }}
                      </div>
                    </b-form-group>
                  </div>
                </ValidationProvider>

                <ValidationProvider name="phone" rules="integer">
                  <div slot-scope="{ errors }">
                    <b-form-group label="Phone:" class="mt-3">
                      <b-form-input
                        v-model="phone"
                        placeholder="Enter phone number"
                      ></b-form-input>
                      <div class="error">
                        {{ errors[0] }}
                      </div>
                    </b-form-group>
                  </div>
                </ValidationProvider>
              </b-col>
              <b-col>
                <ValidationProvider name="message" rules="required">
                  <div slot-scope="{ errors }">
                    <b-form-group label="Message:" class="mt-3">
                      <b-form-textarea
                        v-model="message"
                        placeholder="Enter something..."
                        rows="9"
                        max-rows="20"
                      >
                      </b-form-textarea>
                      <div class="error">
                        {{ errors[0] }}
                      </div>
                    </b-form-group>
                  </div>
                </ValidationProvider>
                
              </b-col>
            </b-row>
            <b-row>
              <b-col class="mt-3">
                <b-button type="submit" variant="primary"
                  >Send Your Message</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-form>
      </ValidationObserver>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: null,
    };
  },
  methods: {
    onSubmit() {
      alert(
        "We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!"
      );
    },
  },
};
</script>
<style lang="scss">
.contact-form {
  margin-top: 10px;
  text-align: left;
  margin-bottom: 10px;
}
.error {
  font-size: 12px;
  padding: 5px;
  color: red;
}
</style>