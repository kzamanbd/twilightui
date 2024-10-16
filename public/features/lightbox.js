window.addEventListener('alpine:init', function () {
    //lightbox
    Alpine.data('lightbox', () => ({
        allControls: 1,
        items: [],

        getItems() {
            return this.allControls == 1
                ? (this.items = [
                      {
                          src: '/images/lightbox1.jpg',
                          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                          description: 'Photo: Kamruzzaman',
                      },
                      {
                          src: '/images/lightbox2.jpeg',
                          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                          description: 'Photo: Kamruzzaman',
                      },
                      {
                          src: '/images/lightbox3.jpeg',
                          title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                          description: 'Photo: Michael Hull',
                      },
                      {
                          src: '/images/lightbox4.jpeg',
                          title: 'This is dummy caption.',
                          description: 'Photo: Folkert Gorter',
                      },
                      {
                          src: '/images/lightbox5.jpeg',
                          title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                          description: 'Photo: Thomas Lefebvre',
                      },
                      {
                          src: '/images/lightbox6.jpeg',
                          title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                          description: 'Photo: Thomas Lefebvre',
                      },
                  ])
                : (this.items = [
                      {
                          src: '/images/lightbox1.jpg',
                      },
                      {
                          src: '/images/lightbox2.jpeg',
                      },
                      {
                          src: '/images/lightbox3.jpeg',
                      },
                      {
                          src: '/images/lightbox4.jpeg',
                      },
                      {
                          src: '/images/lightbox5.jpeg',
                      },
                      {
                          src: '/images/lightbox6.jpeg',
                      },
                  ]);
        },

        bindFancybox() {
            if (this.allControls == 1) {
                Fancybox.bind('[data-fancybox="gallery"]', {
                    Carousel: {
                        Navigation: {
                            prevTpl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
                            nextTpl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
                        },
                    },
                });
            } else if (this.allControls == 2) {
                Fancybox.bind('[data-fancybox="gallery"]', {
                    Carousel: {
                        Navigation: {
                            prevTpl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
                            nextTpl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
                        },
                    },
                    Thumbs: false,
                    Toolbar: false,
                    closeButton: 'top',
                });
            }
        },
    }));
});
