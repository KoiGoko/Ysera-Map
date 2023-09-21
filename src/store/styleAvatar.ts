import {ref} from "vue";
import {defineStore} from "pinia";

export const useStyleAvatar = defineStore('styleAvatar', () => {
    const styleItems = ref([
        {name: 'streets', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/streets-v12.png?Expires=1693460584&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=B0VS1kWp%2Fk74UDvcUWjdAxd96e4%3D'},
        {name: 'outdoors', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/outdoors-v12.png?Expires=1693460529&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=cxa10c7eYMBRKXqiaNCeUI9Cqeo%3D'},
        {name: 'light', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/light-v11.png?Expires=1693460642&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=PAPYbzmzSwemu7jIwf2HeFPTIO8%3D'},
        {name: 'dark', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/dark-v11.png?Expires=1693466513&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=w4fjqRneo%2BW80upmZxurXldYvXc%3'},
        {name: 'satellite', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/satellite-v9.png?Expires=1693460614&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=5TXwibfqR4dw9YiaBL3EN%2Frf4Oc%3D'},
        {name: 'satellite-streets', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/satellite-streets-v12.png?Expires=1693460548&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=lOxQPZTR0PIW%2FbcaE5Bg%2FiqOr0Y%3D'},
        {name: 'navigation-day', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/navigation-day-v1.png?Expires=1693460481&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=R3HXuD%2FP5coFdyltzGMzl%2F7vdRc%3D'},
        {name: 'navigation-night', avatar: 'https://yesra.oss-rg-china-mainland.aliyuncs.com/map-style-images/styles/navigation-night-v1.png?Expires=1693460500&OSSAccessKeyId=TMP.3KfJbMhQEXmykEx8vx8SCAVA4rjmDqytCT7WkrmbnWx5MymydhCphKurgpXa3usWL4QJHKF91KJXBUM9nuYMJZRu6nGhuP&Signature=iCLgimfwXxYRY7f6his1i%2F7rKyk%3D'},
    ])
    return {styleItems}
})
