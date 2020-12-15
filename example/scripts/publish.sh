#!/bin/bash
# Publish site directory to aws s3
# And create invalidation on CloudFront

flags="--delete --acl public-read"

url="s3://custom-wedding-websites/weddings"

wedding="sample"

cloudFrontId="EJNN9SNOWGNCB"

s3Path="${url}/${wedding}"
cloundFrontPath="/weddings/${wedding}/*"

JEKYLL_ENV=production bundle exec jekyll build    
aws s3 sync _site $s3Path $flags

aws cloudfront create-invalidation --distribution-id $cloudFrontId --paths $cloundFrontPath
