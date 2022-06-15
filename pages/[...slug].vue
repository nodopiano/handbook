<template>
    <div class="grid grid-cols-4  bg-np-gray-50 dark:bg-np-black-500 text-np-black-500 dark:text-np-gray-50 font-sans">
        <header
            class="border-b dark:border-np-black-400 border-np-gray-100 col-span-4 py-2 flex justify-between items-center">
            <div class="justify-start flex">
                <logo-dark class="-ml-6 h-12" v-if="$colorMode.preference == 'dark'"></logo-dark>
                <logo-light class="-ml-6 h-12" v-if="$colorMode.preference == 'light'"></logo-light>
            </div>
            <div class="px-8">
                <ColorModePicker />
            </div>
        </header>
        <aside class="col-span-1 dark:border-np-black-400 border-np-gray-100 border-r p-8">
            <ContentNavigation v-slot="{ navigation }" class="text-np-black-300 dark:text-np-gray-300">
                <div v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path" class="py-2 text-2xl font-serif">{{ link.title }}</NuxtLink>
                    <div v-for="child of link.children" :key="child._path">
                        <NuxtLink :to="child._path" class="py-2 text-xl font-serif ml-4">{{ child.title }}</NuxtLink>
                    </div>
                </div>
            </ContentNavigation>
        </aside>
        <main class="col-span-3 p-8">
            <div class="max-w-4xl mx-auto leading-7 text-xl content font-light">
                <ContentDoc v-slot="{ doc }">
                    <h1 class="text-4xl mb-8 font-serif font-extrabold">{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </ContentDoc>
            </div>
        </main>
    </div>
</template>
<script>

import '@fontsource/rubik'
import '@fontsource/bitter'

</script>
<style>
.content p {
    margin-bottom: 1.5rem;
    font-weight: light;
}
</style>
