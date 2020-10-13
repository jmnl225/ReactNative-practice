import React, {Component} from 'react';
import {Image} from 'react-native';

import { Body, Button, Container, Content, Header, Icon, Left, Text, Title, Card, CardItem, Thumbnail, Footer, FooterTab } from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container>
                {/* 1. Header영역 */}
                <Header>
                    {/* 크게 3개 영역으로 구성: 자동 row방향 */}
                    <Left>
                        <Button>
                            <Icon type="FontAwesome" name="bars" ></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Native base</Title>
                    </Body>

                </Header>

                {/* 2. Content영역 */}
               {/* <Content padder>
                   <Button warning>
                       <Text>Button</Text>
                   </Button>

                   <Button info bordered>
                       <Text>Button2</Text>
                   </Button>

                   <Button danger block>
                       <Text>Button3</Text>
                   </Button>

                   <Button>
                       <Icon type="FontAwesome" name="home"></Icon>
                       <Text>home</Text>
                   </Button>
               </Content> */}


          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>  
          
  

                {/* 3. Footer 영역 */}
                <Footer>
                    {/* 탭버튼 */}
                    <FooterTab>
                        <Button>
                            <Text>Tab 1</Text>
                        </Button>
                    </FooterTab>

                    <FooterTab>
                        <Button>
                            <Text>Tab 2</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}