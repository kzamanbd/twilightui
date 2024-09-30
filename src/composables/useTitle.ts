import { useTitle } from '@vueuse/core';

export default function (title: string) {
    return useTitle(`${title} - TwilightUI`);
}
