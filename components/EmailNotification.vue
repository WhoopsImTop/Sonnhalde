<template>
    <div v-show="show" class="notification-badge" id="emailNotification">
        <img width="50px" style="margin-right: 30px;" src="/plane.svg" alt="papierflieger"/>
        <div>
            <h2 style="font-size: 50px;">{{ text }}</h2>
            <h3 style="margin:0">{{ subText }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['show', 'text', 'subText', 'status']
}
</script>

<style>
.notification-badge {
    position: fixed;
    bottom: 50px;
    right: 50px;
    background: #222222;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 20px 20px #00000050;
}
</style>