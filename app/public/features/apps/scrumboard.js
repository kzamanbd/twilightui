document.addEventListener('alpine:init', () => {
    //scrumboard
    Alpine.data('scrumboard', () => ({
        params: {
            id: null,
            title: '',
        },
        paramsTask: {
            projectId: null,
            id: null,
            title: '',
            description: '',
            tags: '',
        },
        selectedTask: null,
        isAddProjectModal: false,
        isAddTaskModal: false,
        isDeleteModal: false,
        projectList: [
            {
                id: 1,
                title: 'In Progress',
                tasks: [
                    {
                        projectId: 1,
                        id: 1,
                        title: 'Creating a new Portfolio on Dribble',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        image: true,
                        date: ' 08 Aug, 2020',
                        tags: ['designing'],
                    },
                ],
            },
            {
                id: 2,
                title: 'Pending',
                tasks: [
                    {
                        projectId: 2,
                        id: 1,
                        title: 'Plan a trip to another country',
                        description: '',
                        date: ' 10 Sep, 2020',
                    },
                ],
            },
            {
                id: 4,
                title: 'Working',
                tasks: [
                    {
                        projectId: 1,
                        id: 2,
                        title: 'Singapore Team Meet',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        date: ' 09 Aug, 2020',
                        tags: ['meeting'],
                    },
                ],
            },
            {
                id: 3,
                title: 'Complete',
                tasks: [
                    {
                        projectId: 3,
                        id: 1,
                        title: 'Dinner with Kelly Young',
                        description: '',
                        date: ' 08 Aug, 2020',
                    },
                    {
                        projectId: 3,
                        id: 2,
                        title: 'Launch New SEO Wordpress Theme ',
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        date: ' 09 Aug, 2020',
                    },
                ],
            },
        ],
        quillEditor: null,

        init() {
            this.initializeSortable();
            // watch for this.$refs.editor to be available in dom
            this.$nextTick(() => {
                this.initEditor();
            });
        },

        initializeSortable() {
            setTimeout(() => {
                //sortable js
                const sortable = document.querySelectorAll('.sortable-list');
                sortable.forEach((item, i) => {
                    window.Sortable.create(item, {
                        animation: 200,
                        group: { name: 'shared' },
                        ghostClass: 'sortable-ghost',
                        dragClass: 'sortable-drag',
                    });
                });
            });
        },

        initEditor() {
            this.quillEditor = new Quill(this.$refs.editor, {
                theme: 'snow',
                placeholder: 'Compose an epic...',
            });
        },

        addEditProject(project) {
            setTimeout(() => {
                this.params = {
                    id: null,
                    title: '',
                };
                if (project) {
                    this.params = JSON.parse(JSON.stringify(project));
                }

                this.isAddProjectModal = true;
            });
        },

        saveProject() {
            if (!this.params.title) {
                this.showMessage('Title is required.', 'error');
                return false;
            }

            if (this.params.id) {
                //update project
                const project = this.projectList.find(d => d.id === this.params.id);
                project.title = this.params.title;
            } else {
                //add project
                const lastId = this.projectList.length
                    ? this.projectList.reduce((max, obj) => (obj.id > max ? obj.id : max), this.projectList[0].id)
                    : 0;

                const project = {
                    id: lastId + 1,
                    title: this.params.title,
                    tasks: [],
                };
                this.projectList.push(project);
            }

            this.initializeSortable();
            this.showMessage('Project has been saved successfully.');
            this.isAddProjectModal = false;
        },

        deleteProject(project) {
            this.projectList = this.projectList.filter(d => d.id != project.id);
            this.showMessage('Project has been deleted successfully.');
        },

        clearProjects(project) {
            project.tasks = [];
        },

        // task
        addEditTask(projectId, task) {
            this.paramsTask = {
                projectId: null,
                id: null,
                title: '',
                description: '',
                tags: '',
            };
            if (task) {
                this.paramsTask = JSON.parse(JSON.stringify(task));
                this.paramsTask.tags = this.paramsTask.tags ? this.paramsTask.tags.toString() : '';
            }
            this.paramsTask.projectId = projectId;
            this.isAddTaskModal = true;
        },

        saveTask() {
            if (!this.paramsTask.title) {
                this.showMessage('Title is required.', 'error');
                return false;
            }

            const project = this.projectList.find(d => d.id === this.paramsTask.projectId);
            if (this.paramsTask.id) {
                //update task
                const task = project.tasks.find(d => d.id === this.paramsTask.id);
                task.title = this.paramsTask.title;
                task.description = this.paramsTask.description;
                task.tags = this.paramsTask.tags?.length > 0 ? this.paramsTask.tags.split(',') : [];
            } else {
                //add task
                let maxid = 0;
                if (project.tasks?.length) {
                    maxid = project.tasks.reduce((max, obj) => (obj.id > max ? obj.id : max), project.tasks[0].id);
                }

                const today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth()); //January is 0!
                const yyyy = today.getFullYear();
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                const task = {
                    projectId: this.paramsTask.projectId,
                    id: maxid + 1,
                    title: this.paramsTask.title,
                    description: this.paramsTask.description,
                    date: dd + ' ' + monthNames[mm] + ', ' + yyyy,
                    tags: this.paramsTask.tags?.length > 0 ? this.paramsTask.tags.split(',') : [],
                };

                project.tasks.push(task);
            }

            this.showMessage('Task has been saved successfully.');
            this.isAddTaskModal = false;
        },

        deleteConfirmModal(projectId, task) {
            this.selectedTask = task;
            setTimeout(() => {
                this.isDeleteModal = true;
            }, 10);
        },

        deleteTask() {
            let project = this.projectList.find(d => d.id === this.selectedTask.projectId);
            project.tasks = project.tasks.filter(d => d.id != this.selectedTask.id);

            this.showMessage('Task has been deleted successfully.');
            this.isDeleteModal = false;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
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
