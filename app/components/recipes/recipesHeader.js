/* eslint-disable linebreak-style */
import { Header, SearchBar } from 'react-native-elements';
import {
  StatusBar, Text, ImageBackground, Image, View, Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Icon } from 'react-native-elements';
import styles from './styles';
import Options from './options';
import { RECIPES_SCHEMA, databaseOptions } from '../../databases/allSchemas';

const Realm = require('realm');

class RecipesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = search => this.setState({ search });

  render() {
    const ingredients = [
      {
        id: 1,
        title: 'dumplings',
        ingredients:
          '1 cup all-purpose flour\n\n1/2 teaspoon salt\n\n2 teaspoons baking powder\n\n1 tablespoon margarine\n\n1/2 cup milk\n\n1 teaspoon white sugar',
        directions:
          '1-Stir together flour baking powder, sugar, and salt in medium size bowl. Cut in butter until crumbly. Stir in milk to make a soft dough.\n\n2-Drop by spoonfuls into boiling stew. Cover and simmer 15 minutes without lifting lid. Serve\n\n3-To make parsley dumplings, add 1 tablespoon parsley flakes to the dry ingredients.',
        notes:
          'Per Serving:\n105 calories\n\n 2.4 g fat\n\n 18 g carbohydrates\n\n 2.8 g protein\n\n 2 mg cholesterol\n\n 386 mg sodium.',
      },
      {
        id: 2,
        title: 'Noodles with Vegetables',
        ingredients: 'SOON!',
        directions: 'SOON!',
        notes: 'SOON!',
      },
      {
        id: 3,
        title: 'Shakshuka',
        ingredients:
          '3 tbsp olive oil\n\n2 large onions, thinly sliced\n\n2 red peppers, cut into long slices\n\n2 green peppers, cut into long slices\n\n4 garlic cloves, finely chopped\n\n½ tsp cumin seeds\n\n½ tsp caraway seeds\n\n½ tsp cayenne pepper\n\n1 tbsp tomato or red pepper purée\n\n2 x 400g tins tomatoes\n\n1 small bunch fresh coriander, roughly chopped\n\n1 small bunch fresh parsley, roughly chopped\n\n8 free-range eggs\n\n85g/3oz feta, crumbled\n\n8 tbsp thick natural yoghurt or labneh\n\nsalt and freshly ground black pepper',
        directions:
          '1: Heat the olive oil in a large, lidded frying pan. Add the onions and peppers and season with salt and pepper. Cook on a medium heat until just softened. Add the garlic and cook for a further 2 minutes. Sprinkle in the cumin and caraway seeds and the cayenne pepper. Stir in the tomato or red pepper purée and cook for a couple more minutes until the paste starts to separate. Add the tomatoes with a splash of water.\n\n2- Simmer for 10 minutes, uncovered, until reduced a little. Taste after 5 minutes and add a little sugar if you think the tomatoes need it. Keep an eye on the texture – you don’t want it runny, but it mustn’t get too dry, either. Add another splash of water if necessary. When the sauce is reduced, stir in the herbs.\n\n3- Make 8 small wells in the sauce. Break an egg into a cup and drop carefully into a well, repeat with the remaining eggs. Cook for a few more minutes until the whites are just set and the yolks are still runny. Sprinkle over the crumbled feta. Serve with yogurt or labneh on the side.',
        notes:
          'Per Serving:\n 462 kcal\n\n26g protein\n\n28g carbohydrates (of which 25g sugars)\n\n25g fat (of which 8g saturates)\n\n8.5g fibre and 1.4g salt.\n\n\nIt might be difficult to find space for 8 eggs in one large frying pan. At this stage, the sauce can be divided between two pans.\n\nAdd 100g of kale or rainbow chard when you cook the onions for an extra vegetable boost.',
      },
      {
        id: 4,
        title: 'Koshary',
        ingredients: 'SOON!',
        directions: 'SOON!',
        notes: 'SOON!',
      },
      {
        id: 5,
        title: 'Tacos',
        ingredients:
          '1 lb lean ground beef\n\n1 medium onion, chopped\n\n1 teaspoon chili powder\n\n1/2 teaspoon salt\n\n1/2 teaspoon garlic powder\n\n1 can (8 oz) tomato sauce\n\n12 Old El Paso™ crunchy taco shells\n\n1 1/2 cups shredded Cheddar cheese (6 oz)\n\n2 cups shredded lettuce\n\n2 medium tomatoes, chopped\n\n3/4 cup Old El Paso™ Thick n Chunky salsa\n\nc3/4 up sour cream, if desired ',
        directions:
          '1- Heat oven to 250°F. In large skillet, brown ground beef and onion over medium heat for 8 to 10 minutes or until beef is thoroughly cooked, stirring frequently. Drain.\n\n2- Stir in chili powder, salt, garlic powder and tomato sauce. Reduce heat to low; cover and simmer 10 minutes.\n\n3- Meanwhile, place taco shells on ungreased cookie sheet. Heat at 250°F. for 5 minutes.\n\n4- To assemble tacos, layer beef mixture, cheese, lettuce and tomatoes in each taco shell. Serve with salsa; top with sour cream.',
        notes:
          'Per Serving:\n 496 kcal\n\n33g protein\n\n56g carbohydrates (of which 11g sugars)\n\n14g fat (of which 3g saturates)\n\n5.5g fibre and 2.2g salt.\n\n\nThese are very classic Mexican-American style tacos, the beauty of which is they’re completely customizable. Skip the ground beef and swap in ground chicken (which is really terrific with taco seasoning), use Old El Paso™ soft flour tortillas instead of the crunch taco shells, and bump up the toppings—set out bowls of chopped radish, sliced green onion, pickled jalapeños, and/or torn fresh cilantro leaves.\n\nChili powder is a vibrant mix of dried oregano, garlic, cumin, and mild to hot chiles. Commercial blends can vary in flavor, but they all add that south-of-the-border taste to the meat. Choose a chipotle chili powder for more heat and a smoky undertone to the flavor it adds.',
      },
      {
        id: 6,
        title: 'Wrapped Meat',
        ingredients: 'SOON!',
        directions: 'SOON!',
        notes: 'SOON!',
      },
      {
        id: 7,
        title: 'Brocoli Shrimp',
        ingredients:
          '1 tablespoon olive oil\n\n1 1/2 pounds medium shrimp, peeled and deveined\n\n24 ounces broccoli florets*\n\n1 teaspoon sesame seeds\n\n1 green onion, thinly sliced\n\nFor The Sauce\n3 tablespoons reduced sodium soy sauce\n\n2 tablespoons oyster sauce\n\n1 tablespoon rice wine vinegar\n\n1 tablespoon brown sugar, packed\n\n1 tablespoon freshly grated ginger\n\n2 cloves garlic, minced\n\n1 teaspoon sesame oil\n\n1 teaspoon cornstarch\n\n1 teaspoon Sriracha, optional',
        directions:
          '1- In a small bowl, whisk together soy sauce, oyster sauce, rice wine vinegar, brown sugar, ginger, garlic, sesame oil, cornstarch and Sriracha, if using; set aside.\n\n2- Heat olive oil in a large skillet over medium high heat. Add shrimp, and cook, stirring occasionally, until pink, about 2-3 minutes. Add broccoli, and cook, stirring frequently, until tender, about 2-3 minutes.\n\n3- Stir in soy sauce mixture until well combined and slightly thickened, about 1-2 minutes.\n\n4- Serve immediately, garnished with sesame seeds and green onion, if desired.',
        notes:
          'Per Serving:\n287 kcal\n40.8g protein\n16.2g carbohydrates (of which 3.7g sugars)\n7.3g fat\n\n\n24 ounces broccoli florets is equal to about 5 cups.',
      },
      {
        id: 8,
        title: 'Chicken Yakisoba',
        ingredients: 'SOON!',
        directions: 'SOON!',
        notes: 'SOON!',
      },
      {
        id: 9,
        title: 'Lasagna',
        ingredients:
          '9 whole-wheat lasagna noodles\n\n1 tablespoon olive oil\n\n2 cloves garlic, minced\n\n1 onion, diced\n\n2 zucchinis, diced\n\n1 carrot, peeled and diced\n\n12 ounces ground turkey\n\nKosher salt and freshly ground black pepper, to taste\n\n1 (28-ounce) can crushed tomatoes\n\n1 (6-ounce) can tomato paste\n\n1 tablespoon Italian seasoning\n\n1 (15-ounce) package reduced-fat ricotta\n\n1 (10-ounce) package frozen chopped spinach, thawed and drained\n\n1/4 cup freshly grated Parmesan\n\n1 large egg, beaten\n\n2 1/2 cups reduced-fat shredded mozzarella\n\n2 tablespoons chopped fresh parsley leaves',
        directions:
          '1- Preheat oven to 350 degrees F. Lightly oil a 9×13 baking dish or coat with nonstick spray.\n\n2- In a large pot of boiling salted water, cook lasagna noodles according to package instructions.\n\n3- Heat olive oil in a large skillet over medium high heat. Add garlic, onion, zucchinis and carrot. Cook, stirring occasionally, until tender, about 3-4 minutes.\n\n4- Stir in ground turkey and cook until turkey has browned, about 3-5 minutes, making sure to crumble the turkey as it cooks; season with salt and pepper, to taste. Drain excess fat.\n\n5-Stir in tomatoes, tomato paste and Italian seasoning until well combined; bring to a simmer until thickened, about 8-10 minutes.\n\n6- In a medium bowl, combine ricotta, spinach, Parmesan and egg; set aside.\n\n7- Spread 1 cup tomato mixture onto the bottom of a 9×13 baking dish; top with 3 lasagna noodles, 1/2 of the ricotta cheese mixture and 1 cup mozzarella cheese. Repeat with a second layer. Top with remaining noodles, tomato mixture and remaining 1/2 cup mozzarella cheese.*\n\n8- Place into oven and bake for 35-45 minutes, or until bubbling. Then broil for 2-3 minutes, or until top is browned in spots.\n\n9- Let cool 15 minutes. Serve, garnished with parsley, if desired.',
        notes:
          '1 piece:\n\n519 calories\n\n27g fat (13g saturated fat)\n\n109mg cholesterol\n\n1013mg sodium\n\n35g carbohydrate (10g sugars, 4g fiber)\n\n35g protein.\n\n\n*MAKE-AHEAD: Cover lasagna tightly with plastic wrap. Refrigerate up to 24 hours. To bake, remove plastic wrap, cover and bake for 40 minutes. Uncover; bake for an additional 10-15 minutes, or until completely cooked through.\n\n\n*TO FREEZE: Cover lasagna tightly with plastic wrap, then aluminum foil. Freeze up to 3 months. To bake, remove plastic wrap, cover and bake for 90 minutes. Uncover; bake for an additional 10-15 minutes, or until completely cooked through.',
      },
    ];
    const { title } = this.props;
    const ingr = ingredients.filter(y => y.title === title);
    const { search } = this.state;

    return (
      <View style={{ backgroundColor: 'white', Opacity: 0.5 }}>
        <ImageBackground
          source={require('/FoodApp/app/photos/recipeBackground.jpg')}
          style={{
            position: 'relative',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        >
          <StatusBar translucent backgroundColor="transparent" />
          <Header
            containerStyle={{ height: 80, backgroundColor: 'transparent' }}
            leftComponent={(
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="arrow-back"
                size={26}
                color="#fff"
              />
)}
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={(
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: 'orange',
                    fontWeight: 'bold',
                    fontFamily: 'serf',
                  }}
                >
                  {`${this.props.title} Receipe`}
                </Text>
              </View>
)}
            rightComponent={(
              <Icon
                onPress={() => this.props.navigation.navigate('Home')}
                name="home"
                size={26}
                color="#fff"
              />
)}
          />

          <View style={styles.container}>
            <Image source={{ uri: this.props.image }} style={styles.coverImage} />
            <Image
              rounded
              source={require('/FoodApp/app/photos/profile.jpg')}
              style={styles.profile}
            />
          </View>
          <View
            style={{
              marginTop: 30,
              flex: 0.2,
              width: Dimensions.get('window').width - 50,
              flexDirection: 'column',
              height: 35,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'rgba(rgba(6, 96, 65, 0.3))',
              backgroundColor: 'rgba(rgba(6, 96, 65, 0.3))',
            }}
          >
            <Text style={styles.text}>Recipes Heaven With Ahmed Khaled</Text>

            <Rating
              type="heart"
              fractions={1}
              startingValue={4}
              ratingCount={5}
              imageSize={20}
              defaultRating={3}
              onFinishRating={this.ratingCompleted}
              style={{ backgroundColor: 'black' }}
            />
          </View>
          <Options ingredients={ingr} directions={ingr} notes={ingr} />
        </ImageBackground>
      </View>
    );
  }
}

export default RecipesHeader;
