import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { colors, Strings } from '../../constants';
import { Gradient, Alert, DataTable } from '../../components';
import { CommonStyle } from '../../styles';
import Styles from './styles';
const redeemList = [
  {
    fullName: 'Rishabh',
    phone: '973484734',
    redeemName: '10 points for 2$',
    action: 'Accept',
    reason:'Accept'
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    redeemName: '10 points for 2$',
    action: 'Accept',
    reason:'Accept'
  },
  {
    fullName: 'Rishabh',
    phone: '973484734',
    redeemName: '20 points for 4$',
    action: 'Deny',
    reason:'Accept'
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    redeemName: '5 points for 1$',
    action: 'Deny',
    reason:'Deny'
  },
  {
    fullName: 'Rishabh',
    phone: '973484734',
    redeemName: '30 points for 6$',
    action: 'Deny',
    reason:'Deny'
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    redeemName: '40 points for 8$',
    action: 'Accept',
    reason:'Accept'
  },
  {
    fullName: 'Rishabh',
    phone: '973484734',
    redeemName: '10 points for 2$',
    action: 'Accept',
    reason:'Accept'
  },
  {
    fullName: 'Prashant',
    phone: '973484734',
    redeemName: '10 points for 2$',
    action: 'Accept',
    reason:'Accept'
  },
];
const events = [
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
  {
    promoName: 'Rishabh',
    startDate: 'April 14, 2020',
    endDate: 'May 24, 2020',
    amount: 'Accept',
    purpose: '',
    image: '',
  },
];
const offer = [{}];

export default () => {
  const {
    admin: {
      redeemRequest,
      promoOffers,
      addPromoOffers,
      viewPromoOffers,
      promotionalEvents,
      addPromotionalEvents, viewPromotionalEvents },
    tableHeaders: { redeemRequestHeaders, promoOfferHeaders, promoEventHeaders }
  } = Strings;

  const buttons = [
    { title: redeemRequest },
    { title: promoOffers },
    { title: promotionalEvents },
  ];
  const promobuttons = [
    { title: addPromoOffers },
    { title: viewPromoOffers }
  ]
  const promotionalbuttons = [
    { title: addPromotionalEvents },
    { title: viewPromotionalEvents }
  ]
  const [active, onTab] = useState(0);
  const [offerActive, offerTab] = useState(0);
  const [promotionalActive, promotionalTab] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [offerName, setOfferName] = useState('');
  const [maxUser, setMaxUser] = useState(0);
  const [rewardsAmount, setRewardsAmount] = useState(0);


  getActiveTap = () => {
    if (active === 0) return redeemList;
    else if (active === 1 && offerActive === 1) return offer;
    else if (active === 2 && promotionalActive === 1) return events;
    else null
  };
  // getofferActiveTab = () => {
  //   if (offerActive === 0) return redeemList;
  //   else if (offerActive === 1) return offer;
  //   else return events;
  // };
  formatedDate = (date) => {
    setStartDate(date)
    if (new Date(date) > new Date(endDate)) {
      setEndDate(null)
    }
  }

  onChangeText = (e) => {
    console.log('e', e.target.name)
    if (e.target.name === 'offername') {
      setOfferName(e.target.value)
    } else if (e.target.name === 'maxuser') {
      setMaxUser(e.target.value)
    }
    else if (e.target.name === 'rewardsamount') {
      setRewardsAmount(e.target.value)
    }
  }

  addPromoOffer = () => {

    let promoOfferObject = {
      name: offerName,
      start_date: moment(startDate).format('MM-DD-YYYY'),
      end_date: moment(endDate).format('MM-DD-YYYY'),
      max_user: maxUser,
      rewards_amount: rewardsAmount

    }
    // Alert({
    //   title: 'Add Promo Offer',
    //   message: 'Promo Offer added Successfully',
    //   label1: common.cancel,
    //   onPress2: () => addPromoOffer(promoOfferObject),
    // });
    console.log('promoOfferObject', promoOfferObject);

  }

  return (
    <View style={[CommonStyle.flexp1, CommonStyle.padding15]}>
      <View style={[CommonStyle.row, CommonStyle.paddingL10]}>
        {buttons.map((item, index) => (
          <Gradient style={[Styles.tabMenu, CommonStyle.marginH5]}>
            <TouchableOpacity
              key={`${index}-tabs-buttons`}
              activeOpacity={1}
              onPress={() => onTab(index)}
              style={[
                CommonStyle.padding15,
                active !== index && Styles.activeTab,
              ]}>
              <Text style={[active === index && Styles.activeTabText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </Gradient>
        ))}
      </View>
      <div>
        <View style={[CommonStyle.row, CommonStyle.paddingL10, CommonStyle.marginT10]}>
          {active === 1 && promobuttons.map((item, index) => (
            <Gradient style={[Styles.tabMenu, CommonStyle.marginH5]}>
              <TouchableOpacity
                key={`${index}-tabs-buttons`}
                activeOpacity={1}
                onPress={() => offerTab(index)}
                style={[
                  CommonStyle.padding10,
                  offerActive !== index && Styles.activeTab,
                ]}>
                <Text style={[offerActive === index && Styles.activeTabText]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </Gradient>
          ))}
        </View>
        <View style={[CommonStyle.row, CommonStyle.paddingL10, CommonStyle.marginT5]}>
          {active === 2 && promotionalbuttons.map((item, index) => (
            <Gradient style={[Styles.tabMenu, CommonStyle.marginH5]}>
              <TouchableOpacity
                key={`${index}-tabs-buttons`}
                activeOpacity={1}
                onPress={() => promotionalTab(index)}
                style={[
                  CommonStyle.padding10,
                  promotionalActive !== index && Styles.activeTab,
                ]}>
                <Text style={[promotionalActive === index && Styles.activeTabText]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </Gradient>
          ))}
        </View>

        {(active === 1 && offerActive === 0) ? (
          <div>
            <Form>
              <FormGroup className="form-group">
                <Label for="offe_rname">Offer Name</Label>
                <Input className="col-md-4"
                  type="text"
                  name="offername"
                  id="offername"
                  placeholder="Offer Name"
                  onChange={(e) => { onChangeText(e) }} />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="start_date">Start Date</Label><br />
                <DatePicker className="col-md-4 form-control" placeholderText="Start Date"
                  showPopperArrow={true}
                  selected={startDate}
                  minDate={new Date()}
                  dateFormat="MM-dd-yyyy"
                  onChange={(date) => { formatedDate(date) }}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="end_date">End Date</Label> <br />
                <DatePicker className="col-md-4 form-control" placeholderText="End Date"
                  showPopperArrow={true}
                  selected={endDate}
                  minDate={startDate}
                  dateFormat="MM-dd-yyyy"
                  onChange={date => setEndDate(date)}
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="max_user">Max User</Label>
                <Input className="col-md-4"
                  type="number"
                  name="maxuser"
                  id="max_user"
                  placeholder="Max User"
                  onChange={(e) => { onChangeText(e) }} />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="end_date">Rewards Amount</Label>
                <Input className="col-md-4"
                  type="number"
                  name="rewardsamount"
                  id="rewards_amount"
                  placeholder="Rewards Amount"
                  onChange={(e) => { onChangeText(e) }} />
              </FormGroup>
              <FormGroup>
                <Button color="primary"
                  onClick={() => { addPromoOffer() }}>Submit</Button>
              </FormGroup>
            </Form>

          </div>


        ) : (active === 2 && promotionalActive === 0) ?
            (<div>
              <Form>
                <FormGroup className="form-group">
                  <Label for="event_rname">Event Name</Label>
                  <Input className="col-md-4"
                    type="text"
                    name="eventname"
                    id="eventname"
                    placeholder="Event Name"
                    onChange={(e) => { onChangeText(e) }} />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="start_date">Start Date</Label><br />
                  <DatePicker className="col-md-4 form-control" placeholderText="Start Date"
                    showPopperArrow={true}
                    selected={startDate}
                    minDate={new Date()}
                    dateFormat="MM-dd-yyyy"
                    onChange={(date) => { formatedDate(date) }}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="end_date">End Date</Label> <br />
                  <DatePicker className="col-md-4 form-control" placeholderText="End Date"
                    showPopperArrow={true}
                    selected={endDate}
                    minDate={startDate}
                    dateFormat="MM-dd-yyyy"
                    onChange={date => setEndDate(date)}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="max_user">Max User</Label>
                  <Input className="col-md-4"
                    type="number"
                    name="maxuser"
                    id="max_user"
                    placeholder="Max User"
                    onChange={(e) => { onChangeText(e) }} />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="end_date">Rewards Amount</Label>
                  <Input className="col-md-4"
                    type="number"
                    name="rewardsamount"
                    id="rewards_amount"
                    placeholder="Rewards Amount"
                    onChange={(e) => { onChangeText(e) }} />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="promotion_purpose">Promotion Purpose</Label>
                  <Input className="col-md-4"
                    type="text"
                    name="promotionpurpose"
                    id="promotionpurpose"
                    placeholder="Event Name"
                    onChange={(e) => { onChangeText(e) }} />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="imagefile">Image</Label>
                  <Input type="file" name="image_uploadfile" id="rewards_amount" placeholder="Image Upload" />
                </FormGroup>
                <FormGroup>
                  <Button color="primary">Submit</Button>
                </FormGroup>
              </Form>
            </div>) : null}

        {active === 0 && (
          <DataTable headers={redeemRequestHeaders} data={getActiveTap()} />
        )}
        {(active === 1 && offerActive === 1) ? (
          <DataTable headers={promoOfferHeaders} data={getActiveTap()} />
        ) : null}
        {(active === 2 && promotionalActive === 1) ? (
          <DataTable headers={promoEventHeaders} data={getActiveTap()} />
        ) : null}
      </div>
    </View>
  );
};
