import Find from "../components/FormElements/Find";
import { Fragment, useState } from "react";
import ViewOnlyItem from "../components/UIElements/ViewOnlyItem";
import './FindNotes.css';
import "./MyNote.css";

const FindNotes = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const filterPosts = (allNotes: any, query: string) => {
        if (!query) {
            return allNotes;
        }
    
        return allNotes.filter((allNotes: any) => {
            const postName = allNotes.title.toLowerCase();
            return postName.includes(query.toLowerCase());
        });
    };
    
    const filteredPosts = filterPosts(allNotes, searchQuery);

	return (
		<>
			<Find
            />
            <div className="notes">
                {filteredPosts.map((e: any) => (
                <Fragment key={e.title}>
                    <ViewOnlyItem
                        title={e.title} 
                        description={e.description} 
                        alt={e.alt} 
                        src={e.src}
                    />
                </Fragment>))}
            </div>
		</>
	);
};


const allNotes = [
    {
        title:'Calculus I',
        description:"A note on L'Hospital",
        alt:'Cal_I.pdf',
        src:'https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
    },
    {
        title:'Calculus II',
        description:'Notes about Double Integral',
        alt:'Cal_II.pdf',
        src:'https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
    },
    {
        title:'Calculus III',
        description:'Paper on Curls & Divergents from MIT',
        alt:'Cal_III.pdf',
        src: 'https://pll.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
    },
    {
        title:'Physics',
        description: 'Laws of Motion',
        alt: 'Newton.pdf',
        src: 'https://www.aakash.ac.in/blog/wp-content/uploads/2022/04/Blog-Image-30.jpg'
    },
    {
        title:'Engineering Graphics',
        description:'summary of rules, conventions, and tips',
        alt:'Drawing.pdf',
        src:'https://www.theengineeringdesign.com/wp-content/uploads/2016/05/2D-Technical-Drawings.jpg'
    },
    {
        title:'Exploring Engineering World',
        description: 'Example projects',
        alt: 'eww.pdf',
        src: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5999/bf58db0e-a495-4738-bbe6-cdb6cfb167a6.jpg'
    },
    {
        title:'Computer Programming',
        description:'Full summary with examples',
        alt:'comProg.pdf',
        src: 'https://www.bleepstatic.com/content/hl-images/2022/08/02/green-hacker-bright.jpg'
    },
    {
        title:'Physics and Electronics for Engineers',
        description: 'maxwell laws bussin',
        alt: 'phyII.pdf',
        src: 'https://www.ge.com/research/sites/default/files/styles/hero_banner/public/images/capabilities/2020-08/pcb3.jpg?itok=_WvwlMts'
    },
    {
        title:'Chemistry for Engineers',
        description:'Summary of the entire semester',
        alt:'chem1.pdf',
        src:'https://ichef.bbci.co.uk/news/976/mcs/media/images/56128000/jpg/_56128638_56529800.jpg'
    },
    {
        title:'English',
        description:'Sentence structures and writing formats',
        alt:'chem1.pdf',
        src:'https://st.depositphotos.com/2931363/4150/i/600/depositphotos_41506827-stock-photo-man-telling-something-for-group.jpg'
    },
    {
        title:'Electric Circuits',
        description:'Ohm\'s law, KCL, KVL, and more',
        alt:'chem1.pdf',
        src:'https://www.makerspaces.com/wp-content/uploads/2017/05/basic-electronics-header-800x400.jpg'
    },

];


export default FindNotes;
