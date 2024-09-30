import { useStorage } from '@vueuse/core';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export const useAuth = () => {
    const user = useStorage('isAuth', {
        login: false,
        expires: 0
    });

    const router = useRouter();

    const login = () => {
        user.value.login = true;
        // 7 days in milliseconds
        user.value.expires = Date.now() + 7 * 24 * 60 * 60 * 1000;
    };

    const logout = () => {
        user.value.login = false;
        user.value.expires = 0;
        router.push('/');
    };

    const isLoggedIn = computed(() => {
        return user.value.expires > Date.now() && user.value.login;
    });

    return {
        user,
        login,
        logout,
        isLoggedIn
    };
};
