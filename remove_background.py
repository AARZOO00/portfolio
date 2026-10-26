import os
from PIL import Image
from rembg import remove

def process_portrait():
    input_path = os.path.join(os.getcwd(), "public", "profile.jpg")
    output_dir = os.path.join(os.getcwd(), "public", "images")
    os.makedirs(output_dir, exist_ok=True)
    
    png_output_path = os.path.join(output_dir, "aarzoo-profile.png")
    webp_output_path = os.path.join(output_dir, "aarzoo-profile.webp")
    legacy_path = os.path.join(os.getcwd(), "public", "profile-cutout.png")

    print(f"Reading input image from: {input_path}")
    input_image = Image.open(input_path).convert("RGBA")
    
    print("Removing background with rembg...")
    # remove() will extract the person and create an alpha channel with 0 for background
    output_image = remove(input_image)
    
    # Save as PNG with transparency
    output_image.save(png_output_path, "PNG", optimize=True)
    print(f"Saved transparent PNG to: {png_output_path}")

    # Save as WebP with transparency
    output_image.save(webp_output_path, "WEBP", quality=95)
    print(f"Saved transparent WebP to: {webp_output_path}")

    # Also save to public root for fallback
    output_image.save(legacy_path, "PNG", optimize=True)
    print(f"Saved transparent cutout to: {legacy_path}")

if __name__ == "__main__":
    process_portrait()
