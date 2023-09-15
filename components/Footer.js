import Link from "next/link";

function Footer() {
  return (
    <div>
      <Link href="#">Shortly</Link>

      <div>
        <h3>Features</h3>
        <Link href="#">Link Shortening</Link>
        <Link href="#">Branded Links</Link>
        <Link href="#">Analytics</Link>
      </div>

      <div>
        <h3>Resources</h3>
        <Link href="#">Blog</Link>
        <Link href="#">Developers</Link>
        <Link href="#">Support</Link>
      </div>

      <div>
        <h3>Company</h3>
        <Link href="#">About</Link>
        <Link href="#">Our Team</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Contact</Link> 
      </div>

      <div>
        <img src="/images/icon-facebook.svg" />
        <img src="/images/icon-twitter.svg" />
        <img src="/images/icon-pinterest.svg" />
        <img src="/images/icon-instagram.svg" />
      </div>
    </div>
  );
}

export default Footer;