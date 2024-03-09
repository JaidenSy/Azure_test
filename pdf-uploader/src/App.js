import React from 'react';
import FileUploader from './FileUploader';
import * as styles from './styles';

function App() {
  return (
    <div className="App" style={styles.appContainer}>
      <header className="App-header">
        <h1 style={styles.appTitle}>PDF Uploader</h1>
      </header>
      <main>
        <FileUploader />
      </main>
    </div>
  );
}

export default App;
