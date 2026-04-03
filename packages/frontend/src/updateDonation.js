const fs = require('fs');
let code = fs.readFileSync('components/Donate/DonationCard.tsx', 'utf-8');

const oldFormDataInterface = interface FormData {
  fullName: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  pan: string;
};

const newFormDataInterface = interface FormData {
  fullName: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  pan: string;
  utrNumber: string;
};

code = code.replace(oldFormDataInterface, newFormDataInterface);

const oldInitialState =   const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    pan: ''
  });;

const newInitialState =   const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    pan: '',
    utrNumber: ''
  });;

code = code.replace(oldInitialState, newInitialState);

const handleSubOld =   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      // Here you would integrate with payment gateway
      const donationId = generateCertificateId();
      const donationAmount = isCustom ? parseInt(customAmount) : selectedAmount;
      const donationData = {
        type: donationType,
        amount: donationAmount,
        formData,
        donationId
      };
      console.log('Processing donation:', donationData);
      alert('Payment gateway integration would happen here. Form is valid!');

      // Show certificate modal
      setDonationData(donationData);
      setShowCertificate(true);
    }
  };;

const handleSubNew =   const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      setIsSubmitting(true);
      const donationId = generateCertificateId();
      const donationAmount = isCustom ? parseInt(customAmount) : selectedAmount;
      
      const payload = {
        type: donationType,
        amount: donationAmount,
        ...formData,
        donationId
      };
      
      try {
        console.log('Processing donation backend entry:', payload);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitSuccess(true);
      } catch (error) {
        alert('Something went wrong. Please ensure you provided a valid UTR or contact support.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };;

code = code.replace(handleSubOld, handleSubNew);

fs.writeFileSync('components/Donate/DonationCard.tsx', code);
