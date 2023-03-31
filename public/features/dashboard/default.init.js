document.addEventListener('alpine:init', function () {
    // finance
    Alpine.data('finance', () => ({
        init() {
            const bitcoin = null;
            const ethereum = null;
            const litecoin = null;
            const binance = null;
            const tether = null;
            const solana = null;

            setTimeout(() => {
                this.bitcoin = new ApexCharts(this.$refs.bitcoin, this.bitcoinOptions);
                this.bitcoin.render();

                this.ethereum = new ApexCharts(this.$refs.ethereum, this.ethereumOptions);
                this.ethereum.render();

                this.litecoin = new ApexCharts(this.$refs.litecoin, this.litecoinOptions);
                this.litecoin.render();

                this.binance = new ApexCharts(this.$refs.binance, this.binanceOptions);
                this.binance.render();

                this.tether = new ApexCharts(this.$refs.tether, this.tetherOptions);
                this.tether.render();

                this.solana = new ApexCharts(this.$refs.solana, this.solanaOptions);
                this.solana.render();
            }, 300);
        },

        get bitcoinOptions() {
            return {
                series: [
                    {
                        data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#00ab55'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },

        get ethereumOptions() {
            return {
                series: [
                    {
                        data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#e7515a'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },

        get litecoinOptions() {
            return {
                series: [
                    {
                        data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#00ab55'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },

        get binanceOptions() {
            return {
                series: [
                    {
                        data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#e7515a'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },

        get tetherOptions() {
            return {
                series: [
                    {
                        data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#00ab55'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },

        get solanaOptions() {
            return {
                series: [
                    {
                        data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
                    },
                ],
                chart: {
                    height: 45,
                    type: 'line',
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 0,
                },
                colors: ['#e7515a'],
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (formatter = () => {
                                return '';
                            }),
                        },
                    },
                },
                responsive: [
                    {
                        breakPoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                        },
                    },
                ],
            };
        },
    }));
});
