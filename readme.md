# Tugas 1 NodeJS Exercise

## Built endpoint Create, Read, Update and Delete from this list user. List user consist of:
- id (integer)
- name (string)
- age (number)
- birthDate string(yyyy-mm-dd)

### Example
```
const users = [{
  id: 1,
  name: 'Romi_Julianto',
  age: 24,
  birthDate: '1998-97-22',
}]

const users = [{
  id: 2,
  name: 'Arman Armono',
  age: 26,
  birthDate: '1996-93-12',
}]
```

## Task Criteria
- Make sure the name is unique adn id is sequential
- In endpoint list, add filter based birthDate
- Save data array user in global variablecukup.


**Steps to setup the local environment:**
- Clone the repository:
```bash
git clone https://github.com/FauziFadhi/nodejs-exercise.git
```
- Go to the Romi_Julianto branch:
```bash
git checkout Romi_Julianto
```
- Install node packages manager:
```bash
npm install
```
- Instal Hapi framework:
```bash
npm install @hapi/hapi
```
- Instal nanoid to generate id user:
```bash
npm install nanoid@3.x.x
```
**Criteria 1**
Web server save list user are added by client application
Here some example list user:
```bash
{
 id: string,
 name: string,
 age: number,
 birthDate: string,
 createdAt: string,
 updatedAt: string,
},
```
```bash
{
 id: 1,
 name: 'Romi Julianto',
 age: 24,
 birthDate: '1998-07-22',
 createdAt: '2022-08-31 06:22:30',
 updatedAt: '2022-08-31 06:22:30',
},
```