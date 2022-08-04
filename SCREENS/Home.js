import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView,TextInput} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState, useEffect } from 'react';

const Home = ({navigation}) => {

  const [mark, setMark] = useState({
    cti: 0, cte: 0, mati: 0, mate: 0, dsi: 0, dse: 0, pyi: 0, pye: 0, 
    nwi: 0, nwe: 0, rmi: 0, rme: 0, dsli: 0, dsle: 0, pyli: 0, pyle: 0,
  });

  const [cgpa, setcgpa] = useState('')

  function updateMark(value) {
    return setMark((prev) => {
        return { ...prev, ...value };
    });
  }

  function calcGrade(mark){
    if(mark >= 90)
      return 10;
    else if(mark >= 80)
      return 9;
    else if(mark >= 70)
      return 8;
    else if(mark >= 60)
      return 7;
    else if(mark >= 50)
      return 6;
  
  function calculateGPA() {
    
    let a = calcGrade(parseInt(mark.dsi) + parseInt(mark.dse) * 0.6) * 3 +
            calcGrade(parseInt(mark.pyi) + parseInt(mark.pye) * 0.6) * 3 +
            calcGrade(parseInt(mark.nwi) + parseInt(mark.nwe) * 0.6) * 3 +
            calcGrade(parseInt(mark.rmi) + parseInt(mark.rme) * 0.6) * 2 +
            calcGrade(parseInt(mark.dsli) + parseInt(mark.dsle) * 0.6) * 2 +
            calcGrade(parseInt(mark.pyli) + parseInt(mark.pyle) * 0.6) * 2 +
            calcGrade(parseInt(mark.cti) + parseInt(mark.cte) * 0.5) * 4 +
            calcGrade(parseInt(mark.mati) + parseInt(mark.mate) * 0.6) * 4;
    a = a / 23;
    setcgpa(a);
    alert(a);
    
    
  }


 


  return (
    <ScrollView>
      <View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.titlesize}> SUBJECTS</Text>
        <Text>{'                  '}</Text>
        <Text style={styles.titlesize}>INTERNALS</Text>
        <Text>{ "                "}</Text>
        <Text style={styles.titlesize}>EXTERNALS</Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}     CONTENT { '\n'}   TECHNOLOGY           </Text>
        <Text>{'        '}</Text>
          <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
            placeholderTextColor={'black'}
            onChangeText={(e) => updateMark({ cti: e })}
          />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
             keyboardType="numeric"
        onChangeText={(e) => updateMark({cte: e})}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}    MATHEMATICS        </Text>
        <Text>{'        '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ mati: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ mate: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}  PYTHON THEORY      </Text>
        <Text>{'        '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ pyi: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ pye: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}       DATA {'\n'}  STRUCTURES        </Text>
        <Text>{'             '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ dsi: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ dse: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}    DSA  LABS                </Text>
        <Text>{'        '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ dsli: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ dsle: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}  RESEARCH  { '\n '}METHODOLOGY         </Text>
        <Text>{'         '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ rmi: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ rme: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}    PYTHON LAB          </Text>
        <Text>{'          '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ pyli: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ pyle: e })}
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        
        <Text style={styles.subject}>{'\n'}   NETWORKING            </Text>
        <Text>{'        '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" keyboardType="numeric"
          placeholderTextColor={'black'}
         
          onChangeText={(e) => updateMark({ nwi: e })}
        />
        <Text>{'               '}</Text>
        <TextInput style={styles.input} placeholder="Enter Mark" placeholderTextColor={'black'}
            keyboardType="numeric"
          onChangeText={(e) => updateMark({ nwe: e })}
        />
        
      </View>
      <View>
          <TouchableOpacity style={styles.button} onPress={calculateGPA} >
            <Text style={styles.buttonText}>Calculate{'\n'}GPA</Text>
            
            
           
          </TouchableOpacity>
                
          <View>
            <Text></Text>
          </View>
         
          <View style={{ alignItems: 'center', marginTop: 70 }}>
            <TouchableOpacity onPress={() => navigation.navigate('calculation')}>
            <Text style={{
            fontSize: 15, fontFamily: 'sans-serif-condensed', color:'black'
            }}>Want to know how it is calculated ?
              
              </Text>
              </TouchableOpacity>
            </View>


          

        </View>
        </View>
    </ScrollView>
    
  )
}

export default Home


const styles = StyleSheet.create({
  titlesize: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'andale mono',
    color:'black'
  },
  subject: {
    fontSize: 13,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    

  },
  input: {
    marginTop: 2,
    // borderColor: 'black',
    width: wp('26%'),
    height: hp('7%'),
    // backgroundColor: '#83b0eb',
    color: 'black',
    marginBottom: 5,
    borderRadius: 9,
    borderWidth: 1,
    

    

  },
  button: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    color:'white',
    justifyContent: 'center',
    width: wp('30%'),
    height: 50,
    alignItems: 'center',
    marginLeft: wp('35%'),
    marginRight: wp('35%'),
    borderWidth: 1, 
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,

    
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 'auto',

    marginRight: 'auto',
    marginBottom: 5,

  
  }
})