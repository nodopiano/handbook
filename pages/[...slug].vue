<template>
    <div class="bg-np-gray-50 dark:bg-np-black-500 ">
        <div class="border-b dark:border-np-black-400 border-np-gray-100">
            <header
                class="max-w-7xl mx-auto  text-np-black-500 dark:text-np-gray-50  py-2 flex justify-between items-center sticky">
                <nuxt-link to="/" class="justify-start flex">
                    <logo-dark class="-ml-8 h-12 dark:block hidden"></logo-dark>
                    <logo-light class="-ml-8 h-12 block dark:hidden"></logo-light>
                </nuxt-link>
                <div class="font-serif text-2xl font-bold hidden md:block ">
                    Handbook
                </div>
                <div class="px-8 justify-between flex">
                    <div class="inline-block md:hidden px-4 cursor-pointer" @click="showSidebar">menu</div>
                    <ColorModePicker />
                </div>
            </header>
        </div>
    <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 bg-np-gray-50 dark:bg-np-black-500 text-np-black-500 dark:text-np-gray-50 font-sans">
        <div class="grid grid-cols-1 md:grid-cols-5 col-span-4 relative">
            <aside
                class="col-span-1 w-full  bg-np-gray-100 md:bg-transparent dark:bg-np-black-500 p-8 absolute md:static -left-full"
                :class="{ 'static -left-0': isVisible }">
                <ContentNavigation v-slot="{ navigation }" class="text-np-black-300 dark:text-np-gray-300 w-full">
                    <div v-for="link of navigation" :key="link._path" class="py-4">
                        <NuxtLink :to="link._path" class=" text-xl font-serif">{{ link.title }}</NuxtLink>
                        <div v-for="child of link.children" :key="child._path">
                            <NuxtLink :to="child._path" class="text-lg font-sans opacity-75 hover:opacity-100 mb-4 ml-4">{{ child.title }}
                            </NuxtLink>
                        </div>
                    </div>
                </ContentNavigation>
            </aside>
            <main class="md:col-span-4 p-8">
                <div class="max-w-4xl mx-auto leading-7 text-lg content">
                    <ContentDoc v-slot="{ doc }">
                        <h1 class="text-4xl mb-8 font-serif font-extrabold">{{ doc.title }}</h1>
                        <ContentRenderer :value="doc" />
                    </ContentDoc>
                </div>
            </main>

        </div>
    </div>
    </div>
</template>
<script>

import '@fontsource/rubik'
import '@fontsource/bitter'



export default {
    setup() {

        const colorMode = useColorMode()
        const isVisible = ref(false);
        const showSidebar = () => {
            isVisible.value = !isVisible.value;
        }

        return { isVisible, showSidebar, colorMode }
    }
}

</script>
<style>
.content p {
    margin-bottom: 1.5rem;
    font-weight: normal;
}

.content a {
    @apply text-np-black-200 dark:text-np-black-100 underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    @apply mb-4 text-np-black-200 dark:text-np-black-100;
}

h1 {
    @apply text-4xl;
}

h2 {
    @apply text-3xl mb-4;
}

h3 {
    @apply text-2xl mb-4;
}
</style>
