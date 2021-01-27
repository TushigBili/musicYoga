import React from 'react';
import Svg, {Circle, G, Mask, Path} from 'react-native-svg';

export const Track: React.FC<any> = (props) => {
  return (
    <Svg width="180" height="180" viewBox="0 0 180 180" fill="none" {...props}>
      <Circle cx="89.3718" cy="89.3718" r="89.3718" fill="#FFEDCB" />
      <Mask id="mask0" mask-type="alpha" x="1" y="0" width="179" height="180">
        <Circle cx="90.6282" cy="89.8359" r="89.3718" fill="#FFEDCB" />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M96.2754 18.4284C74.048 -4.80727 57.5004 23.8559 59.8081 53.4827C62.0114 81.7395 86.9146 179.321 82.1964 219.46H91.0048C113.278 167.83 124.852 48.3115 96.2754 18.4284Z"
          fill="#F8C56A"
        />
        <Path
          d="M87.9999 219.453C110.515 137.491 85.0977 45.0781 85.0036 44.6897C84.8321 43.988 84.1192 43.5539 83.413 43.7269C82.7086 43.895 82.2748 44.6065 82.4446 45.3082C82.5387 45.6933 107.994 138.243 85.3064 219.453H87.9999Z"
          fill="#EB7961"
        />
        <Path
          d="M31.2667 57.0736C5.8964 43.3176 -0.498721 73.3289 9.39076 98.1551C17.6391 118.864 54.2662 180.374 67.7489 219.445H80.3696C81.6698 165.506 61.352 73.38 31.2667 57.0736Z"
          fill="#EB7961"
        />
        <Path
          d="M75.4637 219.446C67.4124 146.26 20.1555 66.3873 19.9863 66.0986C19.6581 65.539 18.9582 65.3612 18.4172 65.6991C17.8814 66.0353 17.7068 66.7657 18.0332 67.3218C18.2008 67.6122 65.1505 146.971 73.1912 219.446H75.4637Z"
          fill="#F3A464"
        />
        <Path
          d="M144.757 72.3231C173.242 59.5609 177.757 92.5693 165.099 118.609C156.475 136.361 125.212 182.025 104.43 220.585H81.0688C89.0359 162.423 115.164 85.5825 144.757 72.3231Z"
          fill="#F8C56A"
        />
        <Path
          d="M89.3962 220.565C109.483 149.909 156.44 83.0714 156.629 82.8054C157.03 82.2283 157.809 82.0973 158.37 82.5086C158.933 82.92 159.066 83.7243 158.665 84.2953C158.479 84.5633 112.01 150.707 91.9687 220.565H89.3962Z"
          fill="#EB7961"
        />
        <Path
          d="M154.869 112.464C175.498 109.949 172.147 131.047 158.928 144.909C146.319 158.129 94.0847 196.703 80.1177 218.695L75.691 215.089C85.5127 180.17 128.344 115.701 154.869 112.464Z"
          fill="#FFE2AB"
        />
        <Path
          d="M108.928 89.8875C123.975 78.5695 130.903 96.6419 126.811 113.507C122.906 129.592 99.3958 183.522 98.3991 207.105L93.2925 206.281C85.18 174.433 89.5825 104.444 108.928 89.8875Z"
          fill="#FFE2AB"
        />
        <Path
          d="M64.3527 29.0326C40.7556 11.2832 29.89 39.6253 36.3082 66.0739C42.4316 91.2991 79.302 175.876 80.8651 212.859L88.8736 211.568C101.596 161.621 94.6917 51.8613 64.3527 29.0326Z"
          fill="#FFE2AB"
        />
        <Path
          d="M12.3004 101.91C-10.8707 99.0857 -7.10678 122.784 7.74162 138.355C21.9047 153.205 80.578 196.534 96.2666 221.237L101.239 217.187C90.2066 177.963 42.0949 105.547 12.3004 101.91Z"
          fill="#FFE2AB"
        />
        <Path
          d="M90.4755 204.493C67.6131 155.03 18.2013 118.511 17.9996 118.353C17.6344 118.067 17.1262 118.12 16.868 118.474C16.6086 118.825 16.6962 119.345 17.0606 119.631C17.2611 119.788 66.7466 156.361 89.2225 205.513L90.4755 204.493Z"
          fill="white"
        />
        <Path
          d="M77.3159 216.432C100.178 166.969 149.59 130.45 149.792 130.292C150.157 130.006 150.665 130.059 150.923 130.413C151.183 130.764 151.095 131.284 150.731 131.57C150.53 131.727 101.045 168.3 78.569 217.452L77.3159 216.432Z"
          fill="white"
        />
        <Path
          d="M95.1968 206.587C90.7285 157.42 112.955 106.381 113.042 106.165C113.199 105.776 113.622 105.587 113.985 105.748C114.347 105.906 114.514 106.353 114.358 106.743C114.271 106.957 92.0112 158.071 96.6424 206.82L95.1968 206.587Z"
          fill="white"
        />
        <Path
          d="M85.9261 212.041C92.9336 134.934 58.0764 54.8915 57.9406 54.5533C57.694 53.9427 57.0308 53.6473 56.4616 53.8994C55.8932 54.1469 55.6317 54.8485 55.8769 55.4595C56.0123 55.7946 90.922 135.956 83.6591 212.406L85.9261 212.041Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};
