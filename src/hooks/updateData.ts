/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-29 15:14:35
 * @LastEditTime: 2023-06-29 15:28:14
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */
import { reactive, computed } from 'vue';
export function updateData() {
    
    const person1 = reactive({
      firstName: '安妮',
      lastName: '海瑟薇'
    });
  
    const fullname = computed(() => {
      return `${person1.firstName}·${person1.lastName}`;
    });
    
    const person = reactive({
      name: '艾薇儿',
      age: 18,
      friend: {
        name: '安妮·海瑟薇',
        age: '28'
      },
      hobbies: ['music', 'dance', 'movie']
    });
    
    const updateInfo = () => {
      person.friend.name = '疯驴子';
    };
  
    return { fullname, person, updateInfo };
}