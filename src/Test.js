import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
// import { db } from './services/firebase';
// import { getDocs,collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import { async } from '@firebase/util';
import firestore from '@react-native-firebase/firestore';

export default function Test() {

    // const movieCollectionRef = collection(db, 'Movies')
    useEffect(()=>{
        // getUsers();
        addUser();
    },[])

//     const getUsers = async() => {
//         firestore()
//   .collection('Users')
//   .get()
//   .then(querySnapshot => {
//     console.log('Total users: ', querySnapshot.size);

//     querySnapshot.forEach(documentSnapshot => {
//       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//     });
//   });
//     }
    // useEffect(() => {
    //     const subscriber = firestore()
    //       .collection('Users')
    //       .doc('gQ7Lxq6uUggkoOn6JKXSHTtkfiW2')
    //       .onSnapshot(documentSnapshot => {
    //         console.log('User data: ', documentSnapshot.data());
    //       });
    
    //     // Stop listening for updates when no longer required
    //     return () => subscriber();
    //   }, []);
    // useEffect(()=>{
    //     // getMovieList();
    //     // createMovie();
    //     // deleteMovie()
    //     updateMovie();
    // },)

    // const getMovieList = async() => {
    //     try{
    //         const data = await getDocs(movieCollectionRef);
    //         const filteredData = data.docs.map((doc)=> ({...doc.data(),id: doc.id}))
    //         console.log('Data is : - ',filteredData)
    //       }catch(err){
    //         console.log('err',err)
    //       }
    // }

    // const createMovie = async()=> {
    //     try{
    //         await addDoc(movieCollectionRef,{
    //             title: 'Intersteller',
    //             releaseData: new Date(),
    //             type: 'moview'
    //         })
    //     }catch(err){
    //         console.log('err',err)
    //     }
    // }

    // const deleteMovie = async() => {
    //     try{
    //         const movieDoc = doc(db, 'Movies', 'MYzQhkYZwVRO3cId1lYp')
    //         await deleteDoc(movieDoc)
    //     }catch(err){
    //         console.log('err',err)
    //     }
    // }

    // const updateMovie = async() => {
    //     try{
    //         const movieDoc = doc(db, 'Movies', 'VPnYQf7IZkU8bcYEnWPy')
    //         await updateDoc(movieDoc,{
    //             title: 'Intersteller2',
    //         })
    //     }catch(err){
    //         console.log('err',err)
    //     }
    // }


    const addUser = async () => {
        try {
          await firestore().collection('Users').add({
            fullName: 'Robert Lewandowski',
            email: 'robert@gmail.com',
            password: 'Test1234',
            phone: '567812932103',
          });
          console.log('User added!');
        } catch (error) {
          console.error('Error adding user: ', error);
        }
    };


  return (
    <View style={{flex: 1,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>This is test screen</Text>
    </View>
  )
}