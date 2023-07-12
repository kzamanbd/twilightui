document.addEventListener('alpine:init', () => {
    //contacts
    Alpine.data('contacts', () => ({
        defaultParams: {
            id: null,
            name: '',
            email: '',
            role: '',
            phone: '',
            location: '',
        },
        displayType: 'list',
        addContactModal: false,
        params: {
            id: null,
            name: '',
            email: '',
            role: '',
            phone: '',
            location: '',
        },
        filterdContactsList: [],
        searchUser: '',
        contactList: [
            {
                id: 1,
                path: 'avatar-1.png',
                name: 'Alan Green',
                role: 'Web Developer',
                email: 'alan@mail.com',
                location: 'Boston, USA',
                phone: '+1 202 555 0197',
                posts: 25,
                followers: '5K',
                following: 500,
            },
            {
                id: 2,
                path: 'avatar-1.png',
                name: 'Linda Nelson',
                role: 'Web Designer',
                email: 'linda@mail.com',
                location: 'Sydney, Australia',
                phone: '+1 202 555 0170',
                posts: 25,
                followers: '21.5K',
                following: 350,
            },
            {
                id: 3,
                path: 'avatar-1.png',
                name: 'Lila Perry',
                role: 'UX/UI Designer',
                email: 'lila@mail.com',
                location: 'Miami, USA',
                phone: '+1 202 555 0105',
                posts: 20,
                followers: '21.5K',
                following: 350,
            },
            {
                id: 4,
                path: 'avatar-1.png',
                name: 'Andy King',
                role: 'Project Lead',
                email: 'andy@mail.com',
                location: 'Tokyo, Japan',
                phone: '+1 202 555 0194',
                posts: 25,
                followers: '21.5K',
                following: 300,
            },
            {
                id: 5,
                path: 'avatar-1.png',
                name: 'Jesse Cory',
                role: 'Web Developer',
                email: 'jesse@mail.com',
                location: 'Edinburgh, UK',
                phone: '+1 202 555 0161',
                posts: 30,
                followers: '20K',
                following: 350,
            },
            {
                id: 6,
                path: 'avatar-1.png',
                name: 'Xavier',
                role: 'UX/UI Designer',
                email: 'xavier@mail.com',
                location: 'New York, USA',
                phone: '+1 202 555 0155',
                posts: 25,
                followers: '21.5K',
                following: 350,
            },
            {
                id: 7,
                path: 'avatar-1.png',
                name: 'Susan',
                role: 'Project Manager',
                email: 'susan@mail.com',
                location: 'Miami, USA',
                phone: '+1 202 555 0118',
                posts: 40,
                followers: '21.5K',
                following: 350,
            },
            {
                id: 8,
                path: 'avatar-1.png',
                name: 'Raci Lopez',
                role: 'Web Developer',
                email: 'traci@mail.com',
                location: 'Edinburgh, UK',
                phone: '+1 202 555 0135',
                posts: 25,
                followers: '21.5K',
                following: 350,
            },
            {
                id: 9,
                path: 'avatar-1.png',
                name: 'Steven Mendoza',
                role: 'HR',
                email: 'sokol@verizon.net',
                location: 'Monrovia, US',
                phone: '+1 202 555 0100',
                posts: 40,
                followers: '21.8K',
                following: 300,
            },
            {
                id: 10,
                path: 'avatar-1.png',
                name: 'James Cantrell',
                role: 'Web Developer',
                email: 'sravani@comcast.net',
                location: 'Michigan, US',
                phone: '+1 202 555 0134',
                posts: 100,
                followers: '28K',
                following: 520,
            },
            {
                id: 11,
                path: 'avatar-1.png',
                name: 'Reginald Brown',
                role: 'Web Designer',
                email: 'drhyde@gmail.com',
                location: 'Entrimo, Spain',
                phone: '+1 202 555 0153',
                posts: 35,
                followers: '25K',
                following: 500,
            },
            {
                id: 12,
                path: 'avatar-1.png',
                name: 'Stacey Smith',
                role: 'Chief technology officer',
                email: 'maikelnai@optonline.net',
                location: 'Lublin, Poland',
                phone: '+1 202 555 0115',
                posts: 21,
                followers: '5K',
                following: 200,
            },
        ],

        init() {
            this.searchContacts();
        },

        searchContacts() {
            this.filterdContactsList = this.contactList.filter(d =>
                d.name.toLowerCase().includes(this.searchUser.toLowerCase()),
            );
        },

        editUser(user) {
            this.params = this.defaultParams;
            if (user) {
                this.params = JSON.parse(JSON.stringify(user));
            }

            this.addContactModal = true;
        },

        saveUser() {
            if (!this.params.name) {
                this.showMessage('Name is required.', 'error');
                return true;
            }
            if (!this.params.email) {
                this.showMessage('Email is required.', 'error');
                return true;
            }
            if (!this.params.phone) {
                this.showMessage('Phone is required.', 'error');
                return true;
            }
            if (!this.params.role) {
                this.showMessage('Occupation is required.', 'error');
                return true;
            }

            if (this.params.id) {
                //update user
                let user = this.contactList.find(d => d.id === this.params.id);
                user.name = this.params.name;
                user.email = this.params.email;
                user.role = this.params.role;
                user.phone = this.params.phone;
                user.location = this.params.location;
            } else {
                //add user
                let maxUserId = this.contactList.length
                    ? this.contactList.reduce(
                          (max, character) => (character.id > max ? character.id : max),
                          this.contactList[0].id,
                      )
                    : 0;

                let user = {
                    id: maxUserId + 1,
                    path: 'avatar-1.png',
                    name: this.params.name,
                    email: this.params.email,
                    role: this.params.role,
                    phone: this.params.phone,
                    location: this.params.location,
                    posts: 20,
                    followers: '5K',
                    following: 500,
                };
                this.contactList.splice(0, 0, user);
                this.searchContacts();
            }

            this.showMessage('User has been saved successfully.');
            this.addContactModal = false;
        },

        deleteUser(user) {
            this.contactList = this.contactList.filter(d => d.id != user.id);
            this.searchContacts();
            this.showMessage('User has been deleted successfully.');
        },

        setDisplayType(type) {
            this.displayType = type;
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
