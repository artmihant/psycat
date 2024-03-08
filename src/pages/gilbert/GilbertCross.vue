<template>
    <div class="text-center absolute" :style="{
        'top':'-'+size_string,
        'left':'-'+size_string
    }">
        <table>
            <tr>
                <td :style="{
                    'border-bottom': border_string, 
                    'border-right': border_string, 
                }"><div :style="{
                    'width':size_string, 
                    'height':size_string
                }"></div></td>
                <td :style="{
                    'border-bottom': border_string, 
                    'border-left': border_string, 
                }"><div :style="{
                    'width':size_string, 
                    'height':size_string
                }"></div></td>
            </tr>
            <tr>
                <td :style="{
                    'border-top': border_string, 
                    'border-right': border_string, 
                }"><div :style="{
                    'width':size_string,
                    'height':size_string
                }"></div></td>
                <td :style="{
                    'border-top': border_string, 
                    'border-left': border_string, 
                }"><div :style="{
                    'width':size_string, 
                    'height':size_string
                }"></div></td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
    color: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
})

const border_string = computed(() => '1px solid '+props.color)


const size_string = computed(() => (props.size/2)+'mm')


</script>