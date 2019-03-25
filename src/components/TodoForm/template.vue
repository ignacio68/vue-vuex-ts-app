<template>
    <div>
        <b-form inline @submit.prevent="validate">
            <label class="sr-only">Todo</label>
            <b-input
                v-model="todo"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Escribe el todo"
                v-validate="'required|min:2'"
                data-vv-name="todo"
            />            <b-button
                variant="primary"
                type="submit"
            >
            Añadir todo
            </b-button>
        </b-form>
        <p style="color: red" v-if="errors.has('todo')">{{ errors.first('todo') }}</p>
    </div>
</template>
