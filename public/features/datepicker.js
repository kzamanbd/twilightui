document.addEventListener('alpine:init', function () {
    Alpine.data('form', () => ({
        date1: '2022-07-05',
        date2: '2022-07-05 12:00',
        date3: '2022-07-05 to 2022-07-10',
        date4: '13:45',
        slider1: '0',
        slider2: '0',
        slider3: '0',
        slider4: '0',
        nouiMin1: 20,
        nouiMax1: 40,
        nouiMin2: 500,
        nouiMax2: 4000,
        nouiMin2Perc: 0,
        nouiMax2Perc: 0,
        lockedState: false,
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.initDatePicker();
                // noui slider 1
                noUiSlider1 = noUiSlider.create(document.getElementById('noui_slider1'), {
                    start: [this.nouiMin1, this.nouiMax1],
                    connect: true,
                    tooltips: true,
                    range: {
                        min: 0,
                        max: 100,
                    },
                    direction: this.$store.app.rtlClass === 'rtl' ? 'rtl' : 'ltr',
                });
                this.$nextTick(() => {
                    document.getElementById('select').value = this.nouiMin1;
                });

                noUiSlider1.on('update', function (values, handle) {
                    document.getElementById('select').value = Math.round(noUiSlider1.get()[0]);
                    document.getElementById('input').value = Math.round(noUiSlider1.get()[1]);
                });

                // noui slider 2
                noUiSlider2 = noUiSlider.create(document.getElementById('noui_slider2'), {
                    start: [this.nouiMin2, this.nouiMax2],
                    connect: true,
                    tooltips: true,
                    range: {
                        min: 0,
                        max: 10000,
                        '10%': [500, 500],
                        '50%': [4000, 1000],
                    },
                    direction: this.$store.app.rtlClass === 'rtl' ? 'rtl' : 'ltr',
                });
                noUiSlider2.on('update', function (values, handle, unencoded, isTap, positions) {
                    document.getElementById('nouiMin2').innerHTML = parseInt(values[0]).toFixed(2);
                    document.getElementById('nouiMax2').innerHTML = parseInt(values[1]).toFixed(2);
                    document.getElementById('nouiMin2Perc').innerHTML = parseInt(positions[0]).toFixed(2) + '%';
                    document.getElementById('nouiMax2Perc').innerHTML = parseInt(positions[1]).toFixed(2) + '%';
                });

                // locking slider
                lockButton = document.getElementById('lockbutton');
                // locking slider1
                lockingSlider1 = noUiSlider.create(document.getElementById('locking_slider1'), {
                    start: 60,
                    animate: false,
                    range: {
                        min: 0,
                        max: 100,
                    },
                    direction: this.$store.app.rtlClass === 'rtl' ? 'rtl' : 'ltr',
                });

                // locking slider2
                lockingSlider2 = noUiSlider.create(document.getElementById('locking_slider2'), {
                    start: 80,
                    animate: false,
                    range: {
                        min: 0,
                        max: 100,
                    },
                    direction: this.$store.app.rtlClass === 'rtl' ? 'rtl' : 'ltr',
                });

                lockingSlider1.on('update', function (values, handle) {
                    locking_slider1_value.innerHTML = values[handle];
                });

                lockingSlider2.on('update', function (values, handle) {
                    locking_slider2_value.innerHTML = values[handle];
                });

                this.$nextTick(() => {
                    let lockedState = this.lockedState;
                    this.$watch('lockedState', value => {
                        lockedState = value;
                    });
                    lockingSlider1.on('slide', function (values, handle) {
                        if (!lockedState) return;
                        lockingSlider2.set(
                            values[handle] - (Number(lockingSlider2.get()) - Number(lockingSlider1.get())),
                        );
                    });

                    lockingSlider2.on('slide', function (values, handle) {
                        if (!lockedState) return;
                        lockingSlider1.set(
                            values[handle] - (Number(lockingSlider2.get()) - Number(lockingSlider1.get())),
                        );
                    });
                });

                this.$watch('$store.app.rtlClass', () => {
                    this.initDatePicker();
                });
            });
        },

        initDatePicker() {
            // basic
            flatpickr(document.getElementById('basic'), {
                dateFormat: 'Y-m-d',
                defaultDate: this.date1,
                position: this.$store.app.rtlClass === 'rtl' ? 'auto right' : 'auto left',
            });
            // date-time
            flatpickr(document.getElementById('dateTime'), {
                defaultDate: this.date2,
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
                position: this.$store.app.rtlClass === 'rtl' ? 'auto right' : 'auto left',
            });
            // range calendar
            flatpickr(document.getElementById('range-calendar'), {
                defaultDate: this.date3,
                dateFormat: 'Y-m-d',
                mode: 'range',
                position: this.$store.app.rtlClass === 'rtl' ? 'auto right' : 'auto left',
            });
            // Preloading time
            flatpickr(document.getElementById('preloading-time'), {
                defaultDate: this.date4,
                noCalendar: true,
                enableTime: true,
                dateFormat: 'H:i',
                position: this.$store.app.rtlClass === 'rtl' ? 'auto right' : 'auto left',
            });
        },

        selectUpdateValue() {
            noUiSlider1.set([this.nouiMin1, this.nouiMax1]);
        },
    }));
});
