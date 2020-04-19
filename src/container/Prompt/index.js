import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getWeeklyPoints, changeRoute} from './bl';
import {Styles} from './styles';
import {CommonStyle} from '../../styles';
import {Strings, isWeb} from '../../constants';
import {SafeView} from '../../components';
import WeeklyPoints from './WeeklyPoints';
import Buttons from './Buttons';
import WorksSteps from './WorksSteps';
import SignUp from './SignUp';
import {Wrapper, Scroll, Button} from '../../components';

export default props => {
  const {prompt, auth} = Strings;
  const [loader, setLoader] = useState(true);
  const [points, setPoints] = useState([]);
  const {componentId} = props;
  useEffect(() => {
    const getpoints = async () => {
      const p = await getWeeklyPoints();
      setPoints(p);
      setLoader(false);
    };
    getpoints();
  }, []);
  return (
    <SafeView>
      <View
        style={[Styles.container, CommonStyle.flex1, CommonStyle.container]}>
        <Wrapper>
          <Scroll style={[CommonStyle.paddingH10]}>
            <Buttons componentId={props.componentId} />
            <SignUp componentId={props.componentId} />
            <View
              style={[
                CommonStyle.paddingV5,
                CommonStyle.paddingH10,
                Styles.pointTextView,
              ]}>
              <Text style={[Styles.pointHeading]}>{prompt.pointHeading}</Text>
            </View>
            <WeeklyPoints points={points} loader={loader} />
            <View style={[CommonStyle.paddingV15]} />
            <View style={Styles.extraHeight} />
            <WorksSteps />
            {/* <Button
              onPress={() => isWeb && changeRoute(componentId, 'Admin')}
              name={'Admin'}
            /> */}
          </Scroll>
        </Wrapper>
      </View>
    </SafeView>
  );
};
