<template>
  <ModalRoot @close="close" icon="fa-solid fa-edit" title="About Section">
    <template #body>
      <!-- @submit.prevent="onSubmit" -->
      <form >
        <div class="flex flex-row gap-1" v-for="(skill, index) in skillList" :key="index">
          <TextInput
            :validateRule="schema.fields.skillName"
            name="skillName"
            placeholder="Skill Name"
          />
          <TextInput
            :validateRule="schema.fields.percent"
            name="percent"
            placeholder="Percent"
          />
          <IconButton icon="fa-solid fa-trash" @click="handleRemoveSkill(index)"></IconButton>
        </div>
      </form>
    </template>
    <template #footer>
      <Button label="Cancel" @click="close"></Button>
      <!-- @click="onSubmit"  -->
      <Button type="submit" :label="isEdit ? 'Edit' : 'Add'" />
    </template>
  </ModalRoot>
</template>

<script lang="ts" setup>
import { ModalRoot, Button, TextInput, TextArea,IconButton } from "../shared";
import { Form } from "vee-validate";
import * as yup from "yup";
import {
  SkillSectionEmitsTypes,
  SkillSectionFormPropsTypes,
} from "../skills-section/skillsSectionTypes";
import { SkillItemType } from "../skills-section/skillsSectionTypes";

//______________________________initialize
const props=withDefaults(defineProps<SkillSectionFormPropsTypes>(), { isEdit: false,skills:undefined });

const emit = defineEmits<SkillSectionEmitsTypes>();
const skillList: SkillItemType[] = reactive(props.skills);
const handleRemoveSkill=(index:number)=>{
  console.log("removed item in ",index)
}

// watch(skills,{
//   console.log("skills",skills)
// })
//______________________________validation init
const schema = yup.object({
  skillName: yup.string().required(),
  percent: yup.number().required(),
});
// const arraySchema = yup.array().of(schema);
//___________________________________functions
const { handleSubmit } = useForm<SkillItemType[]>({
  validationSchema: schema,
  initialValues: skillList,
});

const close = () => {
  emit("close");
  console.log("dataaa",skillList)
};
// const onSubmit = handleSubmit((values) => {
//   // emit("apply", values);
//   close();
// });
</script>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-10vw);
}
</style>
