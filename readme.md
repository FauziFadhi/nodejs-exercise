# Tugas 1 Nodejs (CRUD Without Database)

## buat endpoint Create, Read, Update, Delete (CRUD) untuk list user yang mana field terdiri dari:
- id (integer)
- name (string)
- age (number)
- birthDate string(YYYY-mm-dd format)

### Example
```
const users = [{
  id: 1,
  name: 'Fauzi Fadhillah',
  age: 17,
  birthDate: '2000-01-01',
}]
```

## Criteria Tugas
- pastikan nama nama nama yang ada di dalam array tsb itu unique.
- id sequential.
- di endpoint list, ada filter berdasarkan tanggal lahir.
- kumpulkan tugas dengan membuat branch masing masing dengan menggunakan nama kalian dari repository ini. ex: Fauzi_Fadhillah
- cukup simpan data array user di dalam variable global.