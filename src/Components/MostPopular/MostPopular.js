import React from 'react';
import './MostPopular.css';

import Card from './Card';

export default function MostPopular() {
  return (
    <div className='section-wrapper'>
     <div className='section-header'>
        <h4>Most popular</h4>
     </div>
     <div className='most-popular-items'>
      <Card title="Game 1" categorie="Categorie 1"></Card>
      <Card title="Game 2" categorie="Categorie 2"></Card>
      <Card title="Game 3" categorie="Categorie 3"></Card>
      <Card title="Game 4" categorie="Categorie 4"></Card>
      <Card title="Game 1" categorie="Categorie 1"></Card>
      <Card title="Game 2" categorie="Categorie 2"></Card>
      <Card title="Game 3" categorie="Categorie 3"></Card>
      <Card title="Game 4" categorie="Categorie 4"></Card>
     </div>
    </div>
  )
}
