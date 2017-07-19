import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/action/search.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Breakfnast',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOdCFP88T27cRCQzyhWfJTVepv-hgCNtRfOOaRDfhTAc-LD8l',
    title: 'Tasty bburger',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUaa-f5sQl7VdJXgtIurwJrdDpWolesmnc9fcpFwuj3I3p23rQ',
    title: 'Camecra',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6bwUxQHn3je6ZiaPwzy4TZeUR1Vml-FCkDlgJNwz-XkVLuLJrQ',
    title: 'Mornaing',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBYlVecjafSkII8hxc1PSRoA1tIdzs9W1xyGuszsNO-qrU_zuXA',
    title: 'Breakfvast',
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qqtcesRKnVlJFh2eGQaNeDKUoSvvYe3vOm0oxJM5zbmiLE140w',
    title: 'Tasty sburger',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWRZ-UIwX5LEEeSkKtAViPPlaVHiTbeaogYHDBqnIO5RsM1zdYw',
    title: 'Camedra',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkr66ZwMurMAFSt9qdHrTxuuRm38O08-Z6IBZrequ2TpPQnyX',
    title: 'Mornidng',
  },
  {
    img: 'http://ste.india.com/sites/default/files/2016/01/21/452974-monkey.jpg',
    title: 'Morniddng',
  },
];

const Photos = (props) => (
  <div style={styles.root}>
    <GridList
      cols={2}
      padding={10}
      style={{ overflowY: 'auto' }}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Photos;
