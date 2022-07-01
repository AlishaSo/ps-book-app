import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='wrapper'>
        <Book
          title='The Misadventures of Awkward Black Girl'
          img='https://pictures.abebooks.com/isbn/9781476749075-us.jpg'
          description="The Misadventures of Awkward Black Girl is a 2015 memoir written by Issa Rae. In the book, Rae chronicles her life through a series of humorous autobiographical essays and stories. The book's title is taken from Rae's popular web series of the same name, often simply referred to as Awkward Black Girl."
        />
        <Book
          title="The Trauma Cleaner: One Woman's Extraordinary Life in Death, Decay & Disaster"
          img='https://pictures.abebooks.com/isbn/9781250101204-us.jpg'
          description="Before she was a trauma cleaner, Sandra Pankhurst was many things: husband and father, drag queen, gender reassignment patient, sex worker, small businesswoman, trophy wife... But as a little boy, raised in violence and excluded from the family home, she just wanted to belong."
        />
        <Book
          title='Educated'
          img='https://images-na.ssl-images-amazon.com/images/I/61iGdfIx9gL.jpg'
          description='Educated is a memoir by the American author Tara Westover. Westover recounts overcoming her survivalist Mormon family in order to go to college, and emphasizes the importance of education in enlarging her world.'
        />
        <Book
          title='Untamed'
          img='https://epiloguebookcafe.com/wp-content/uploads/2020/03/untamed-glennon.jpg'
          description='Untamed is a 2020 memoir by Glennon Doyle. It was published by The Dial Press on March 10, 2020. It is her third memoir following her works Love Warrior and Carry on, Warrior. The book debuted at number one on The New York Times nonfiction best-seller list. where it stayed for seven weeks.'
        />
        <Book
          title="Born A Crime"
          img='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473867911l/29780253.jpg'
          description="The memoir of one man’s coming-of-age, set during the twilight of apartheid and the tumultuous days of freedom that followed."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
