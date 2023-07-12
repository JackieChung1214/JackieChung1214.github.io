.random-generator {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#number {
  font-size: 64px;
  animation: randomJump 0.5s infinite;
}

@keyframes randomJump {
  0% {
    transform: translateY(0);
    color: #000;
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
    color: #000;
  }
}

button {
  margin: 5px;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #3498db;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

button:focus {
  outline: none;
}
