<template>
    <div>
                <icon-dark v-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark'"></icon-dark>
                <icon-light v-if="$colorMode.preference == 'dark'" @click="$colorMode.preference = 'light'"></icon-light>
    </div>
</template>

<style scoped>
p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}
</style>
