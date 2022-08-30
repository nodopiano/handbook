<template>
                <div class="max-w-4xl mx-auto leading-7 text-lg content">
                    <ContentDoc v-slot="{ doc }" class="dark:text-np-gray-700">
                        <h1 class="text-4xl mb-8 font-serif font-extrabold">{{ doc.title }}</h1>
                        <ContentRenderer :value="doc" class="dark:text-np-gray-500/90"/>
                    </ContentDoc>
                </div>
</template>
<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "default",
});
</script>

