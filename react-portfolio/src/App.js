import './App.css';
import Navbar from './components/navbar/navbar';
import Aboutme from './components/aboutme/Aboutme';
import Myprojects from './components/myprojects/myprojects';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Navbar />

      <Aboutme />

      <Myprojects />

      <Contact />

      <footer class="footer text-center py-4 mt-5">
        <div class="container">
          <p class="mb-2">&copy; 2025 Georgina Ramos. All rights reserved.</p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;