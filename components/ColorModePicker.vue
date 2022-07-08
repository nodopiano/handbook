<template>
    <div>
                <icon-dark class="dark:hidden block cursor-pointer" @click="colorMode.preference = 'dark'"></icon-dark>
                <icon-light class="hidden dark:block cursor-pointer" @click="colorMode.preference = 'light'"></icon-light>
    </div>
</template>
<script>
export default {
    setup() {
        const colorMode = useColorMode();

        return {colorMode}
    }
}

</script>

<style scoped>
p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}
</style>
