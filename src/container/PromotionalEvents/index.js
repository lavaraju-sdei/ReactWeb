import React, { Component, useEffect, useState } from "react";
import { View, Text, Platform, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Styles } from "./styles";
import { CommonStyle } from "../../styles";
import { Strings } from "../../constants";
import { SafeView, Wrapper, Button, Loader } from "../../components";
import { goBack, getWeeklyPromotions, onEnter } from "./bl"
import HeaderBox from "./HeaderBox"
import List from "./List"
export default props => {
    const { common } = Strings;
    const {componentId} = props;
    const {loader_p = false, promotional={}} = useSelector(({dashboard})=>dashboard);
    useEffect(() => {
        getWeeklyPromotions();
      }, [])
    return (
        <SafeView >
            {loader_p? <Loader  style={[CommonStyle.flex1, CommonStyle.center]}/> :
            <View style={[Styles.container, CommonStyle.flex1]}>
                <Wrapper>
                <HeaderBox/>
                <List data={promotional}/>
                {promotional&&Object.keys(promotional).length>0&&<Button onPress={()=>onEnter(promotional)} name={common.enter} textStyle={Styles.buttonText} />}
                <Button onPress={()=>goBack(componentId)} name={common.goBack} textStyle={Styles.buttonText} />
                </Wrapper>
            </View> }
        </SafeView>
    )
}