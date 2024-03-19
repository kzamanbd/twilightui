async function displayAlert(type) {
    if (type === 1) {
        new window.Swal({
            title: 'Saved successfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 2) {
        new window.Swal({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 3) {
        const ipAPI = 'https://api.ipify.org?format=json';
        new window.Swal({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received ' + 'via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: () => {
                return fetch(ipAPI)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        new window.Swal({
                            title: data.ip,
                        });
                    })
                    .catch(() => {
                        new window.Swal({
                            type: 'error',
                            title: 'Unable to get your public IP',
                        });
                    });
            },
        });
    } else if (type === 4) {
        new window.Swal({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 5) {
        const steps = ['1', '2', '3'];
        const swalQueueStep = window.Swal.mixin({
            confirmButtonText: 'Next →',
            showCancelButton: true,
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true,
            },
            validationMessage: 'This field is required',
            padding: '2em',
            customClass: 'sweet-alerts',
        });

        const values = [];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length; ) {
            const result = await swalQueueStep.fire({
                title: `Question ${steps[currentStep]}`,
                text: currentStep == 0 ? 'Chaining swal modals is easy.' : '',
                inputValue: values[currentStep],
                showCancelButton: currentStep > 0,
                currentProgressStep: currentStep,
                customClass: 'sweet-alerts',
            });
            if (result.value) {
                values[currentStep] = result.value;
                currentStep++;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                currentStep--;
            } else {
                break;
            }
        }

        if (currentStep === steps.length) {
            window.Swal.fire({
                title: 'All done!',
                padding: '2em',
                html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                confirmButtonText: 'Lovely!',
                customClass: 'sweet-alerts',
            });
        }
    } else if (type === 6) {
        new window.Swal({
            title: 'Custom animation with Animate.css',
            animation: false,
            showClass: {
                popup: 'animate__animated animate__flip',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 7) {
        let timerInterval;

        new window.Swal({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            customClass: 'sweet-alerts',
            didOpen: () => {
                window.Swal.showLoading();
                const b = window.Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = window.Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then(result => {
            if (result.dismiss === window.Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    } else if (type === 8) {
        new window.Swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '/images/custom-swal.svg',
            imageWidth: 224,
            imageHeight: 'auto',
            imageAlt: 'Custom image',
            animation: false,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 9) {
        new window.Swal({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, ' + '<a href="/github.com">links</a> ' + 'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 10) {
        new window.Swal({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then(result => {
            if (result.value) {
                new window.Swal({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    customClass: 'sweet-alerts',
                });
            }
        });
    } else if (type === 11) {
        const swalWithBootstrapButtons = window.Swal.mixin({
            confirmButtonClass: 'btn btn-secondary',
            cancelButtonClass: 'btn btn-dark mr-3',
            buttonsStyling: false,
            customClass: 'sweet-alerts',
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
                padding: '2em',
                customClass: 'sweet-alerts',
            })
            .then(result => {
                if (result.value) {
                    swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    } else if (type === 12) {
        new window.Swal({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(' + '/images/sweet-bg.jpg' + ') no-repeat 100% 100%',
        });
    } else if (type === 13) {
        new window.Swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 14) {
        new window.Swal({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    } else if (type === 15) {
        const toast = window.Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '10px 20px',
        });
    }
}
