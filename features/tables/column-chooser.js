document.addEventListener('alpine:init', () => {
    Alpine.data('miscellaneous', () => ({
        columns: [
            {
                name: 'Id',
                hidden: true,
            },
            {
                name: 'First Name',
                hidden: true,
            },
            {
                name: 'Last Name',
                hidden: true,
            },
            {
                name: 'Email',
                hidden: true,
            },
            {
                name: 'Phone',
                hidden: true,
            },
            {
                name: 'Company',
                hidden: true,
            },
            {
                name: 'Address',
                hidden: true,
            },
            {
                name: 'Age',
                hidden: false,
            },
            {
                name: 'Birthday',
                hidden: false,
            },
            {
                name: 'Active',
                hidden: false,
            },
        ],

        hideCols: [7, 8, 9],
        showCols: [0, 1, 2, 3, 4, 5, 6],
        showHideColumns(col, value) {
            if (value) {
                this.showCols.push(col);
                this.hideCols = this.hideCols.filter(d => d != col);
            } else {
                this.hideCols.push(col);
                this.showCols = this.showCols.filter(d => d != col);
            }
            let headers = this.datatable1.columns;
            headers.hide(this.hideCols);
            headers.show(this.showCols);
        },
        datatable1: null,

        init() {
            let headers = this.columns.map(col => {
                return col.name;
            });
            this.datatable1 = new window.DataTable('#myTable', {
                data: {
                    headings: headers,
                    data: [
                        [
                            1,
                            'Caroline',
                            'Jensen',
                            'carolinejensen@zidant.com',
                            '+1 (821) 447-3782',
                            'POLARAX',
                            '529 Scholes Street',
                            39,
                            '2004-05-28',
                            true,
                        ],
                        [
                            2,
                            'Celeste',
                            'Grant',
                            'celestegrant@polarax.com',
                            '+1 (838) 515-3408',
                            'MANGLO',
                            '639 Kimball Street',
                            32,
                            '1989-11-19',
                            false,
                        ],
                        [
                            3,
                            'Tillman',
                            'Forbes',
                            'tillmanforbes@manglo.com',
                            '+1 (969) 496-2892',
                            'APPLIDECK',
                            '240 Vandalia Avenue',
                            26,
                            '2016-09-05',
                            false,
                        ],
                        [
                            4,
                            'Daisy',
                            'Whitley',
                            'daisywhitley@applideck.com',
                            '+1 (861) 564-2877',
                            'VOLAX',
                            '350 Pleasant Place',
                            21,
                            '1987-03-23',
                            true,
                        ],
                        [
                            5,
                            'Weber',
                            'Bowman',
                            'weberbowman@volax.com',
                            '+1 (962) 466-3483',
                            'ORBAXTER',
                            '154 Conway Street',
                            26,
                            '1983-02-24',
                            false,
                        ],
                        [
                            6,
                            'Buckley',
                            'Townsend',
                            'buckleytownsend@orbaxter.com',
                            '+1 (884) 595-2643',
                            'OPPORTECH',
                            '131 Guernsey Street',
                            40,
                            '2011-05-29',
                            true,
                        ],
                        [
                            7,
                            'Latoya',
                            'Bradshaw',
                            'latoyabradshaw@opportech.com',
                            '+1 (906) 474-3155',
                            'GORGANIC',
                            '668 Lenox Road',
                            24,
                            '2010-11-23',
                            true,
                        ],
                        [
                            8,
                            'Kate',
                            'Lindsay',
                            'katelindsay@gorganic.com',
                            '+1 (930) 546-2952',
                            'AVIT',
                            '773 Harrison Avenue',
                            24,
                            '1987-07-02',
                            true,
                        ],
                        [
                            9,
                            'Marva',
                            'Sandoval',
                            'marvasandoval@avit.com',
                            '+1 (927) 566-3600',
                            'QUILCH',
                            '200 Malta Street',
                            28,
                            '2010-11-02',
                            false,
                        ],
                        [
                            10,
                            'Decker',
                            'Russell',
                            'deckerrussell@quilch.com',
                            '+1 (846) 535-3283',
                            'MEMORA',
                            '708 Bath Avenue',
                            27,
                            '1994-04-21',
                            false,
                        ],
                        [
                            11,
                            'Odom',
                            'Mills',
                            'odommills@memora.com',
                            '+1 (995) 525-3402',
                            'ZORROMOP',
                            '907 Blake Avenue',
                            34,
                            '2010-01-24',
                            true,
                        ],
                        [
                            12,
                            'Sellers',
                            'Walters',
                            'sellerswalters@zorromop.com',
                            '+1 (830) 430-3157',
                            'ORBOID',
                            '978 Oakland Place',
                            28,
                            '1975-11-12',
                            true,
                        ],
                        [
                            13,
                            'Wendi',
                            'Powers',
                            'wendipowers@orboid.com',
                            '+1 (863) 457-2088',
                            'SNORUS',
                            '376 Greenpoint Avenue',
                            31,
                            '1979-06-02',
                            true,
                        ],
                        [
                            14,
                            'Sophie',
                            'Horn',
                            'sophiehorn@snorus.com',
                            '+1 (885) 418-3948',
                            'XTH',
                            '343 Doughty Street',
                            22,
                            '2018-09-20',
                            true,
                        ],
                        [
                            15,
                            'Levine',
                            'Rodriquez',
                            'levinerodriquez@xth.com',
                            '+1 (999) 565-3239',
                            'COMTRACT',
                            '643 Allen Avenue',
                            27,
                            '1973-02-08',
                            true,
                        ],
                        [
                            16,
                            'Little',
                            'Hatfield',
                            'littlehatfield@comtract.com',
                            '+1 (812) 488-3011',
                            'ZIDANT',
                            '194 Anthony Street',
                            33,
                            '2012-01-03',
                            false,
                        ],
                        [
                            17,
                            'Larson',
                            'Kelly',
                            'larsonkelly@zidant.com',
                            '+1 (892) 484-2162',
                            'SUREPLEX',
                            '978 Indiana Place',
                            20,
                            '2010-06-14',
                            true,
                        ],
                        [
                            18,
                            'Kendra',
                            'Molina',
                            'kendramolina@sureplex.com',
                            '+1 (920) 528-3330',
                            'DANJA',
                            '567 Charles Place',
                            31,
                            '2002-07-19',
                            false,
                        ],
                        [
                            19,
                            'Ebony',
                            'Livingston',
                            'ebonylivingston@danja.com',
                            '+1 (970) 591-3039',
                            'EURON',
                            '284 Cass Place',
                            33,
                            '1994-10-18',
                            false,
                        ],
                        [
                            20,
                            'Kaufman',
                            'Rush',
                            'kaufmanrush@euron.com',
                            '+1 (924) 463-2934',
                            'ILLUMITY',
                            '408 Kingsland Avenue',
                            39,
                            '2011-07-10',
                            false,
                        ],
                        [
                            21,
                            'Frank',
                            'Hays',
                            'frankhays@illumity.com',
                            '+1 (930) 577-2670',
                            'SYBIXTEX',
                            '973 Caton Place',
                            31,
                            '2005-06-15',
                            false,
                        ],
                        [
                            22,
                            'Carmella',
                            'Mccarty',
                            'carmellamccarty@sybixtex.com',
                            '+1 (876) 456-3218',
                            'ZEDALIS',
                            '919 Judge Street',
                            21,
                            '1980-03-06',
                            true,
                        ],
                        [
                            23,
                            'Massey',
                            'Owen',
                            'masseyowen@zedalis.com',
                            '+1 (917) 567-3786',
                            'DYNO',
                            '108 Seaview Avenue',
                            40,
                            '2012-03-01',
                            false,
                        ],
                        [
                            24,
                            'Lottie',
                            'Lowery',
                            'lottielowery@dyno.com',
                            '+1 (912) 539-3498',
                            'MULTIFLEX',
                            '557 Meserole Avenue',
                            36,
                            '1982-10-10',
                            true,
                        ],
                        [
                            25,
                            'Addie',
                            'Luna',
                            'addieluna@multiflex.com',
                            '+1 (962) 537-2981',
                            'PHARMACON',
                            '688 Bulwer Place',
                            32,
                            '1988-05-01',
                            true,
                        ],
                    ],
                },
                perPage: 10,
                perPageSelect: [10, 20, 30, 50, 100],
                columns: [
                    {
                        select: 0,
                        sort: 'asc',
                    },
                    {
                        select: 8,
                        render: (data, cell, row) => {
                            return this.formatDate(data);
                        },
                    },
                    {
                        select: 9,
                        render: (data, cell, row) => {
                            return `<span class="capitalize" class="${
                                data ? 'text-success' : 'text-danger'
                            }">${data}</span>`;
                        },
                    },
                ],
                firstLast: true,
                labels: {
                    perPage: '{select}',
                },
                layout: {
                    top: '{search}{select}',
                    bottom: '{info}{pager}',
                },
            });
            let cols = this.datatable1.columns;
            cols.hide(this.hideCols);
            cols.show(this.showCols);
        },
        formatDate(date) {
            if (date) {
                const dt = new Date(date);
                const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
                const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
                return day + '/' + month + '/' + dt.getFullYear();
            }
            return '';
        },
    }));
});
