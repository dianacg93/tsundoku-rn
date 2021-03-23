import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import CardItem from "../../Components/CardItem";
import tailwind from "tailwind-rn";

const BookstoresScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={tailwind("text-2xl text-center uppercase")}>Indie Bookstores in NYC</Text>
			</View>
			<View style={styles.centered}>
				<CardItem
					name="Three Lives & Company"
					imageUrl="https://static01.nyt.com/images/2019/11/25/t-magazine/art/35tmag-3lives-slide-FY4X/35tmag-3lives-slide-FY4X-superJumbo.jpg"
					description="Snug neighborhood bookshop selling a well-curated selection of hardcovers & paperbacks since 1968."
					address="238 W 10th St, New York, NY 10014"
					website="threelives.com"
					websiteUrl="http://threelives.com/"
				/>
				<CardItem
					name="Mysterious Book Shop"
					imageUrl="https://cdn.shopify.com/s/files/1/0162/2182/files/FullSizeRender_large.jpg?v=1492024593"
					description="Bookstore with a floor-to-ceiling stock of new, used, rare & collectible crime & suspense titles."
					address="58 Warren St, New York, NY 10007"
					website="mysteriousbookshop.com"
					websiteUrl="https://www.mysteriousbookshop.com/"
				/>
				<CardItem
					name="Strand Bookstore"
					imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Strand_Bookstore_%2848072652191%29.jpg/1280px-Strand_Bookstore_%2848072652191%29.jpg"
					description="Landmark shop specializing in new, used & rare books from philosophy to finance, plus bookish gifts."
					address="828 Broadway, New York, NY 10003"
					website="strandbooks.com"
					websiteUrl="https://www.strandbooks.com/"
				/>
				<CardItem
					name="The Corner Bookstore"
					imageUrl="https://cornerbookstorenyc.com/wp-content/uploads/2018/11/corner-storefront.jpg"
					description="Compact nook offering a range of adult fiction & nonfiction books, from bestsellers to travel tomes."
					address="1313 Madison Ave, New York, NY 10128"
					website="cornerbookstorenyc.com"
					websiteUrl="https://cornerbookstorenyc.com/"
				/>
				<CardItem
					name="East Village Books"
					imageUrl="https://images.squarespace-cdn.com/content/v1/5424ba9ee4b0c69384ec83e1/1506993923198-JR1TT5VJQBDUG8LXO9QG/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/East-Village-Books.jpg?format=1500w"
					description="Long-running, cozy bookstore with an eclectic collection of used books, DVDs & music."
					address="99 St Marks Pl, New York, NY 10009"
					website="newyorkcitybookbuyer.com"
					websiteUrl="https://www.newyorkcitybookbuyer.com/"
				/>
				<CardItem
					name="Cafe con Libros"
					imageUrl="https://static.wixstatic.com/media/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_90/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg"
					address="724 Prospect Pl, Brooklyn, NY 11216"
					description="Small, wood-clad cafe offering special caffeinated beverages & baked goods alongside assorted books."
					website="cafeconlibrosbk.com"
					websiteUrl="https://www.cafeconlibrosbk.com/"
				/>
				<CardItem
					name="The Lit. Bar"
					imageUrl="https://static.wixstatic.com/media/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_90/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg"
					address="131 Alexander Ave, The Bronx, NY 10454"
					description="Cozy neighborhood bookshop/wine bar stocking popular titles & hosting events & readings."
					website="thelitbar.com"
					websiteUrl="http://www.thelitbar.com/"
				/>
				<CardItem
					name="Boogie Down Books"
					imageUrl="https://static.wixstatic.com/media/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_90/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg"
					address="828 Broadway, New York, NY 10003"
					description="Boogie Down Books is a bookstore-without-walls for kids, teens, families, and educators in the Bronx and beyond."
					website="boogiedownbooks.indielite.org"
					websiteUrl="https://boogiedownbooks.indielite.org/"
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default BookstoresScreen;
