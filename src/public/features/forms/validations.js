document.addEventListener('alpine:init', () => {
    // content section
    Alpine.data('form', () => ({
        form1: {
            name: '',
        },
        isSubmitForm1: false,
        form2: {
            email: '',
        },
        isSubmitForm2: false,
        form3: {
            select: '',
        },
        isSubmitForm3: false,
        form4: {
            firstName: 'Zaman',
            lastName: 'Park',
            userName: '',
            city: '',
            state: '',
            zip: '',
            isTerms: false,
        },
        isSubmitForm4: false,
        form5: {
            firstName: 'Zaman',
            lastName: 'Park',
            userName: '',
            city: '',
            state: '',
            zip: '',
            isTerms: false,
        },
        isSubmitForm5: false,
        form6: {
            firstName: 'Zaman',
            lastName: 'Park',
            userName: '',
            city: '',
            state: '',
            zip: '',
            isTerms: false,
        },
        isSubmitForm6: false,

        emailValidate(email) {
            const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
            return regexp.test(email);
        },
        submitForm1() {
            this.isSubmitForm1 = true;
            if (this.form1.name) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },
        submitForm2() {
            this.isSubmitForm2 = true;
            if (this.emailValidate(this.form2.email)) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },
        submitForm3() {
            this.isSubmitForm3 = true;
            if (this.form3.select) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },
        submitForm4() {
            this.isSubmitForm4 = true;
            if (
                this.form4.firstName &&
                this.form4.lastName &&
                this.form4.userName &&
                this.form4.city &&
                this.form4.state &&
                this.form4.zip &&
                this.form4.isTerms
            ) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },
        submitForm5() {
            this.isSubmitForm5 = true;
            if (
                this.form5.firstName &&
                this.form5.lastName &&
                this.form5.userName &&
                this.form5.city &&
                this.form5.state &&
                this.form5.zip &&
                this.form5.isTerms
            ) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },
        submitForm6() {
            this.isSubmitForm6 = true;
            if (
                this.form6.firstName &&
                this.form6.lastName &&
                this.form6.userName &&
                this.form6.city &&
                this.form6.state &&
                this.form6.zip &&
                this.form6.isTerms
            ) {
                //form validated success
                this.showMessage('Form submitted successfully.');
            }
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));
});
