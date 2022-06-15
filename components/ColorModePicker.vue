<template>
    <div>
        <ul class="cursor-pointer">
            <li>
                <icon-dark v-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark'"></icon-dark>
            </li>
            <li>
                <icon-light v-if="$colorMode.preference == 'dark'" @click="$colorMode.preference = 'light'">
                </icon-light>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    display: inline-block;
    padding: 5px;
}

p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}
</style>
